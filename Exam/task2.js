const Task2 = async () => {
  let promise1 = new Promise((resolve) => {
    let name = prompt("enter the name");
    resolve(name);
  });
  promise1.then((data) => console.log(data)).catch((e) => console.log(e));
};
Task2();
