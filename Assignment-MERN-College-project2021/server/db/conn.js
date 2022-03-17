const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db).then(()=>{
    console.log(`connection sucessfull`); 
}).catch((err) => console.log('NO CONNECTION YET'));