const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({

    name : {
        type : String,
        
        minlength : 4 
    },

    email : {
        type : String
        
        
    },

    phone : {
        type : Number,
        
        minlength: 10
    },

    work : {
        type : String
       
    },

    password : {
        type : String
       
    },

    cpassword : {
        type : String
       
    },
    date : {
        type : Date , 
        default:Date.now
    },
    adhar:{
        type : Number,
        minlength:12
        }, 
        programme:{
          type : String
        
            },
            department:{
               type : String
            
                },
                rollno:{
                   type : String
                
                    },  
                    college:{
                        type : String
                       
                    
                        },
                        city:{
                            type : String
                           
                        
                            },
                            state:{
                                type : String
                               
                            
                                },

                           blood : {
                               type :String
                           },     
                           ename : {
                            type :String
                        },
              ename2 : {
                            type :String
                        },
    
                        ename3 : {
                            type :String
                        },

                        ename4 : {
                            type :String
                        },
                        ename5 : {
                            type :String
                        },
                        ename6 : {
                            type :String
                        },
                        ename7 : {
                            type :String
                        },
                        ename8 : {
                            type :String
                        },
    // details  : [{
    //     adhar:{
    //     type : Number,
    //     minlength:12,
    //     required : true
    //     }, 
    //     programme:{
    //       type : String
        
    //         },
    //         department:{
    //            type : String
            
    //             },
    //             rollno:{
    //                type : String
                
    //                 },  
    //                 college:{
    //                     type : String
                       
                    
    //                     },
    //                     city:{
    //                         type : String
                           
                        
    //                         },
    //                         state:{
    //                             type : String
                               
                            
    //                             }
    // }],
    messages :[
        {
            name : {
                type : String,
                required : true
            },
        
            email : {
                type : String,
                required : true
            },
        
            phone : {
                type : Number,
                required : true
            },
            message : {
                type : String,
                required : true
            }

        }
    ],
    tokens : [
        {
            token : {
                type : String,
                 required : true
            }
        }
    ]
});


userSchema.pre('save', async function (next)
{
    
    try{
    if(this.isModified('password'))
    {
        
        this.password = await bcrypt.hash(this.password, 12);
     this.cpassword = await bcrypt.hash(this.cpassword , 12);
    }
    next();
}catch(err){
    console.log(err)};
});

userSchema.methods.generateAuthToken = async function(){
    try{
const token = jwt.sign({_id : this._id.toString()}, process.env.SECRET_KEY);
this.tokens = this.tokens.concat( {token: token });
await this.save();
console.log("token is saved and returned");
return token;
    }catch(err){
        console.log(err);
    }
}



userSchema.methods.addMessage = async function(name , email , phone , message){

    try{
this.messages = this.messages.concat({name , email , phone , message});
 await this.save();
 return this.messages;

    }catch(error){
        console.log(error);
    }

}
// userSchema.methods.addMessage1 = async function(adhar,  programme , department, rollno, college, city , state ){

//     try{
// this.details = this.details.concat({adhar ,  programme , department, rollno, college, city , state });
//  await this.save();
//  return this.details;

//     }catch(error){
//         console.log(error);
//     }

// }
userSchema.methods.addMessage1 = async function(adhar,  programme , department, rollno, college, city , state , blood ){

    try{
 this.user = User.updateMany({adhar ,  programme , department, rollno, college, city , state , blood });
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }


}


userSchema.methods.addMessage2 = async function(ename){

    try{
 this.user = User.updateMany({ename});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addMessage22 = async function(ename2){

    try{
 this.user = User.updateMany({ename2});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addMessage3 = async function(ename3){

    try{
 this.user = User.updateMany({ename3});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addMessage4 = async function(ename4){

    try{
 this.user = User.updateMany({ename4});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addMessage5 = async function(ename5){

    try{
 this.user = User.updateMany({ename5});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addMessage6 = async function(ename6){

    try{
 this.user = User.updateMany({ename6});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addMessage7 = async function(ename7){

    try{
 this.user = User.updateMany({ename7});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addMessage8 = async function(ename8){

    try{
 this.user = User.updateMany({ename8});
 await this.save();
 return this.user;

    }catch(error){
        console.log(error);
    }

}
const User = mongoose.model('USER',userSchema);
module.exports = User ;


