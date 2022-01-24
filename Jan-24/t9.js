const promise1 = new Promise((resolve, reject) => {
   
    let flag = true;
    if(flag)
    {
        resolve("True");
    }else
    {
        reject("false");
    }
  });

  console.log(promise1);