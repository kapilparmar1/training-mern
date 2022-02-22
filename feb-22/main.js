const add = require("./add.js");
const sub = require("./sub.js");
const divide = require("./divide.js");
const mul = require("./mul.js");

const Comp = () => {
  let num1 = 10;
  let num2 = 1;
  console.log("Addition is : ", add(num1, num2));
  console.log("Subtraction is : ", sub(num1, num2));
  if (num2 !== 0) {
    console.log("Division is : ", divide(num1, num2));
  } else {
    divide(num1, num2);
  }
  console.log("Multiplication is : ", mul(num1, num2));
  // add();
};

Comp();
