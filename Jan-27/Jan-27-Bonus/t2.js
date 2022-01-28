
const print = ((n) => {
   let r = 2;
   for(let i =1;i<=n;i++)
   {
setTimeout(()=> {
   console.log(r*i); 
},
 i*1000);
   }
 });

 print(2);