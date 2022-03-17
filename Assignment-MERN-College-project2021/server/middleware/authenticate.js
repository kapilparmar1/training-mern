const jwt = require('jsonwebtoken');
const jwt1 = require('jsonwebtoken');
const User = require('../model/userSchema');
const cookieParser = require('cookie-parser');


const express = require('express');
const app = express();
app.use(cookieParser());

const Authenticate = async ( req , res , next) =>{
    try{


        const token = req.cookies['jwt'];
        const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
        console.log(verifyToken);

        const rootUser = await User.findOne({_id : verifyToken._id, "tokens.token" : token});
        

        console.log(rootUser);
          

        /*if(!rootUser){
            throw new Error('user not found');
        }*/
        
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
        
         next();
    

    }catch(err)
    {
        res.status(401).send('Unauthorized Access : No token provided');
     console.log(err);
    }



}


module.exports = Authenticate;