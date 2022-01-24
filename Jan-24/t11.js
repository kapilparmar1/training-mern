const promise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
      resolve("10"); }, 3000);
   
   
  });
 
  
  promise1.then((value)=> console.log(value));