const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate.js');
// const authenticate1 = require('../middleware/authenticate.js');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());



require('../db/conn');
const User = require('../model/userSchema');


// router.get('/',(req , res)=>{
//     res.send("HEllo WOrld from server router js");
//     });
// using promises

  /*  router.post('/register', (req , res)=>{
        const { name ,email , phone , work , password, cpassword } = req.body;
       
        if (!name || !email || !phone || !work || !password || !cpassword)
    
        return res.status(422).json({error :"pls fill all"});
        User.findOne({email : email}).then((userExist) =>{
            if(userExist)
                 {
            return res.status(422).json({error :"Already registered"});
                 }


        const user = User ({name ,email , phone , work , password, cpassword}); 
        user.save().then(() =>{
            res.status(201).json({message: " successfully db created "});
      
        }).catch((error) => res.status(500).json({message : "failed to store"}));
    }).catch(err => {console.log(err)});
    });
    */

    router.post('/register', async (req , res)=>{
        const { name ,email , phone , work , password, cpassword } = req.body;
       
       if (!name || !email || !phone || !work || !password || !cpassword)
        {
    
        return res.status(423).json({error :"pls fill all"});
        }else if(password.length < 8)
        {
            return res.status(423).json({error :"password length is minimum 8"});
        } 
        else if(phone.length < 10 || phone.length > 11 )
        {
            return res.status(423).json({error :"phone length is minimum 10"});
        }

        try{

           const userExist = await User.findOne({email : email});
                if(userExist)
                     { 
                         console.log("HI he is already registered");
                return res.status(422).json({error :"Already registered"});
                     }
                     else if(password != cpassword)
                     {
                        return res.status(421).json({error :"passwords do not match"});
                        console.log("dint match");

                     } 
                     else
                     {
                        const user = User ({name ,email , phone , work , password, cpassword}); 

                        await user.save();
                        res.status(201).json({error: " successfully db created "});
                        console.log("db registered");
                        
                     }  
        }catch{
            console.log(err);       
              }
        
    });

    // Login authentication

    router.post('/signin', async ( req , res) => {
try{

    const { email , password } = req.body;

    if( !email || !password)
    {

        return res.status(400).json({error :"pls fill all"});
        console.log("all empty");
    }
    

    const userLogin = await User.findOne({email : email });

    if(userLogin)
    {
        const isMatch = await bcrypt.compare(password , userLogin.password);
         const token = await userLogin.generateAuthToken();
         console.log("generate after this.");

          /* res.setHeader('x-access-token', 'Bearer '+ token);
           */

           res.cookie("jwt", token , {
             expires:  new Date(Date.now() + 3000000000),  // five minutes = 300000
             httpOnly: true, 
             
            
         }
         );  
         
         

        if(!isMatch)
        {
     res.status(400).json({error : " Invalid Credentials"});
     console.log("wrong password");
        }else
        {
            res.json({message : "User login successfull"});
                
        }

    }else
    {
        res.status(400).json({error : " Invalid Credentials"});
    }

   
           

}catch(err){
    console.log(err);
}
    });

    router.get('/about', authenticate ,  (req , res)=>{
         res.send(req.rootUser);
        
            });
            

           

//  router.get('/payment', authenticate,  (req , res)=>{
//                     res.send(req.rootUser);
                   
//                        });


router.get('/logout', async(req , res)=>{
                         /*  res.clearCookie('jwt' , { path : '/login'});
                        res.status(200).send(); */
try{ 

    console.log("logout is gonna happen");
                      //  req.rootUser.tokens = []; 
                        res.clearCookie('jwt');

console.log("logout done");

await req.rootUser.save();
res.status(200).send(req.rootUser);
res.render('login');

    
}catch(error)
{
    res.status(500).send(error);
  }                          
 });                      


                   

router.post('/contact',authenticate, async (req , res)=>{
                try{
                    const {name , email , phone , message} = req.body;
                 
if( !name || !email || !phone || !message)
{
    return res.json({error : "fill the form properly"});
}

const userContact = await User.findOne({_id : req.userID});

if(userContact)
{
   const userMessage = await userContact.addMessage(name , email , phone , message);
   await userContact.save();
   res.status(201).json({message : "Saved feedback successfully"});
}


                }catch(err){
console.log(err);
                }
                });

                
         
            //   router.post('/bpayment',authenticate, async (req , res)=>{


            //     try{ 
            //         const {adhar ,  programme , department, rollno, college, city , state} = req.body;
                  
                 
            //         if( !adhar || !programme || !department || !rollno || !college || !city || !state  )
            //         {
            //             return res.status(423).json({error : "Can not be empty"});
            //         }else if(adhar.length < 12 || adhar.length > 12 )
            //         {
            //             return res.status(422).json({error :"phone length is minimum 12"});
            //         }
            //         const userContact = await User.findOne({_id : req.userID});
                    
            //         if(userContact)
            //         {
            //             const userMessage = await userContact.addMessage1(adhar ,  programme , department, rollno, college, city , state);
            //            await userContact.save();
            //            res.status(201).json({message : "Saved feedback successfully"});
            //         }
                
                    
                    
            //                         }catch(err){
            //         console.log(err);
            //                         }
            //                         });

                                 

            
                                           router.get('/getdata', authenticate,  (req , res)=>{
                                    
                                            res.send(req.rootUser);
    
                                           
                                               });   
                                           
                                          
              router.post('/bpayment',authenticate, async (req , res)=>{


                try{ 
                    const {adhar ,  programme , department, rollno, college, city , state , blood} = req.body;
                  
                 
                    if( !adhar || !programme || !department || !rollno || !college || !city || !state || !blood )
                    {
                        return res.status(423).json({error : "Can not be empty"});
                    }else if(adhar.length < 12 || adhar.length > 12 )
                    {
                        return res.status(422).json({error :"phone length is minimum 12"});
                    }
                    const userContact = await User.findOne({_id : req.userID});
                    
                    if(userContact)
                    {
                        const userMessage = await userContact.addMessage1(adhar ,  programme , department, rollno, college, city , state , blood);
                       await userContact.save();
                       res.status(201).json({message : "Saved feedback successfully"});
                    }
                
                    
                    
                                    }catch(err){
                    console.log(err);
                                    }
                                    });


                                    router.post('/run',authenticate, async (req , res)=>{


                                        try{ 
                                            const {ename} = req.body;
                                          
                                         
                                            if( !ename )
                                            {
                                                return res.status(423).json({error : "name not recieved"});
                                            }
                                            const userContact = await User.findOne({_id : req.userID});
                                            
                                            if(userContact)
                                            {
                                                const userMessage = await userContact.addMessage2(ename);
                                               await userContact.save();
                                               res.status(201).json({message : "Saved feedback successfully"});
                                            }
                                        
                                            
                                            
                                                            }catch(err){
                                            console.log(err);
                                                            }
                                                            });



 router.post('/alphabay',authenticate, async (req , res)=>{


                                                                try{ 
                                                                    const {ename2} = req.body;
                                                                  
                                                                 
                                                                    if( !ename2 )
                                                                    {
                                                                        return res.status(423).json({error : "name not recieved"});
                                                                    }
                                                                    const userContact = await User.findOne({_id : req.userID});
                                                                    
                                                                    if(userContact)
                                                                    {
                                                                        const userMessage = await userContact.addMessage22(ename2);
                                                                       await userContact.save();
                                                                       res.status(201).json({message : "Saved feedback successfully"});
                                                                    }
                                                                
                                                                    
                                                                    
                                                                                    }catch(err){
                                                                    console.log(err);
                                                                                    }
                                                                                    });
   router.post('/rise',authenticate, async (req , res)=>{


                                                                                        try{ 
                                                                                            const {ename3} = req.body;
                                                                                          
                                                                                         
                                                                                            if( !ename3 )
                                                                                            {
                                                                                                return res.status(423).json({error : "name not recieved"});
                                                                                            }
                                                                                            const userContact = await User.findOne({_id : req.userID});
                                                                                            
                                                                                            if(userContact)
                                                                                            {
                                                                                                const userMessage = await userContact.addMessage3(ename3);
                                                                                               await userContact.save();
                                                                                               res.status(201).json({message : "Saved feedback successfully"});
                                                                                            }
                                                                                        
                                                                                            
                                                                                            
                                                                                                            }catch(err){
                                                                                            console.log(err);
                                                                                                            }
                                                                                                            });

router.post('/wartex',authenticate, async (req , res)=>{


              try{ 
                                                                                                                    const {ename4} = req.body;
                                                                                                                  
                                                                                                                 
                                                                                                                    if( !ename4 )
                                                                                                                    {
                                                                                                                        return res.status(423).json({error : "name not recieved"});
                                                                                                                    }
                                                                                                                    const userContact = await User.findOne({_id : req.userID});
                                                                                                                    
                                                                                                                    if(userContact)
                                                                                                                    {
                                                                                                                        const userMessage = await userContact.addMessage4(ename4);
                                                                                                                       await userContact.save();
                                                                                                                       res.status(201).json({message : "Saved feedback successfully"});
                                                                                                                    }
                                                                                                                
                                                                                                                    
                                                                                                                    
                                                                                                                                    }catch(err){
                                                                                                                    console.log(err);
                                                                                                                                    }
                                                                                                                                    });
  router.post('/cipherspace',authenticate, async (req , res)=>{


                                                                                                                                        try{ 
                                                                                                                                                                                                                                              const {ename5} = req.body;
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                              if( !ename5)
                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                  return res.status(423).json({error : "name not recieved"});
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                              const userContact = await User.findOne({_id : req.userID});
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                              if(userContact)
                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                  const userMessage = await userContact.addMessage5(ename5);
                                                                                                                                                                                                                                                 await userContact.save();
                                                                                                                                                                                                                                                 res.status(201).json({message : "Saved feedback successfully"});
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                              }catch(err){
                                                                                                                                                                                                                                              console.log(err);
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              });
router.post('/honeypot',authenticate, async (req , res)=>{
    try{ 
  const {ename6} = req.body;
  if( !ename6)
{
   return res.status(423).json({error : "name not recieved"});
}
 const userContact = await User.findOne({_id : req.userID});
        if(userContact)
    {
 const userMessage = await userContact.addMessage6(ename6);
   await userContact.save();
  res.status(201).json({message : "Saved feedback successfully"});
  }
    }catch(err)
    {
        console.log(err);

    }
});

router.post('/Ano',authenticate, async (req , res)=>{
    try{ 
  const {ename7} = req.body;
  if( !ename7)
{
   return res.status(423).json({error : "name not recieved"});
}
 const userContact = await User.findOne({_id : req.userID});
        if(userContact)
    {
 const userMessage = await userContact.addMessage7(ename7);
   await userContact.save();
  res.status(201).json({message : "Saved feedback successfully"});
  }
    }catch(err)
    {
        console.log(err);

    }
});


router.post('/mystery',authenticate, async (req , res)=>{
    try{ 
  const {ename8} = req.body;
  if( !ename8)
{
   return res.status(423).json({error : "name not recieved"});
}
 const userContact = await User.findOne({_id : req.userID});
        if(userContact)
    {
 const userMessage = await userContact.addMessage8(ename8);
   await userContact.save();
  res.status(201).json({message : "Saved feedback successfully"});
  }
    }catch(err)
    {
        console.log(err);

    }
});


router.get('/bpayment', authenticate,  (req , res)=>{
                                    
    res.send(req.rootUser);

   
       });

       router.get('/payment2', authenticate,  (req , res)=>{
                                    
        res.send(req.rootUser);

       
           });
module.exports = router;
