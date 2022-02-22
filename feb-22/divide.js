const divide = (num1, num2) => {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return console.log("Can not divide by 0");
  }
};

module.exports = divide;
