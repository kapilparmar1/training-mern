const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')
const path = require('path')

const express = require('express');
const app = express();
 const cors = require('cors')

 const pub= "pk_test_51K0IvtSCvg0OG3laPQrhhXGdkaeWze4xxF9Nvgq7HZ9ErFh7H5G1sRyyWrhrOsNliluyvN006r537AK7W6G1AfQp001MpAcRVK"
 const sec= "sk_test_51K0IvtSCvg0OG3lavCJmgDYsTk06ocRqYJuQbh0aRvtoOiWszeVukbC5a5pwy0axLXzXug5PQP1SkswIT7Th4FIP00IcfGnoiR"

const stripe = require('stripe')(sec)

app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json()) 

app.use(cors());


app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('Home.ejs',{
     key : pub
    })
})


app.post('/payment', function(req, res){ 

    // Moreover you can take more details from user 
    // like Address, Name, etc from form 
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: 'Gautam Sharma', 
        address: { 
            line1: 'TC 9/4 Old MES colony', 
            postal_code: '110092', 
            city: 'New Delhi', 
            state: 'Delhi', 
            country: 'India', 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 10000,    // Charing Rs 25 
            description: 'Web Development Product', 
            currency: 'INR', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        
        res.send("Success") 
        console.log(charge); // If no error occurs 
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 

// app.post('/payment', cors(),async(req , res)=>{

//     let{amount , id} = req.body;
//     try{
//         const payment = await stripe.paymentIntents.create({

//             amount , 
//             currency : INR ,
//             description : "KJC",
//             payment_method :  id , 
//             confirm : true
//         })
//         console.log("Payment" , payment);
//         res.json({
//             payment : "success",
//             success : true
//         })
//     }catch(error)
//     {
//         console.log("error" , error);
//         res.json({
//             payment : "fail",
//             success : false
//         })
//     }
// })

dotenv.config({path :'./config.env'});
require('./db/conn');
// const User = require ('./model/userSchema');



app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));

const PORT = process.env.PORT || 3000;

 /*const middleware = (req , res , next )=>{
console.log("hello my middleware");
next();
}*/

 /*app.get('/', (req , res)=>{
res.send("HEllo WOrld from server app.js");
}); */





app.get('/signin', (req , res)=>{
    
            res.send("HEllo WOrld SIGNIN from server");
            });

app.get('/signup', (req , res)=>{
                res.send("HEllo WOrld SIGNUP from server");
                });


app.listen(PORT, ()=>{
    console.log(`server is runnig at ${PORT}`);
});