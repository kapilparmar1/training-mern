const sum = (result) => {
  console.log("Sum is : ", result);
};

const New = (callback) => {
  const arr = [1, 2, 3, 4, 5, 6];
  let sum1 = 0;
  arr.forEach((data) => {
    sum1 += data;
  });
  callback(sum1);
};

New(sum);
