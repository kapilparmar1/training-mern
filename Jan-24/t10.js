let promise1  =new Promise((resolve, reject)=>{

    let fetchRes = fetch(
        "https://www.javascripttutorial.net/sample/promise/api.json");
        
          
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })



    // if(!fetchRes)
    // {
    //     reject("Rejected");
    // }else{
    //     resolve("Resolved");
    // }

    // promise1.then(value => console.log(value),(value)=> console.log(value)).catch((e)=> console.log(e));

});





