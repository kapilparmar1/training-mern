let obj = {
  id: 1,
  age: 14,
  name: "kapil",
};

Object.keys(obj).forEach((data, index) => {
  if (index === 1) {
    delete obj[data];
    console.log("Length  of the object is : ", Object.entries(obj).length);
  }
});
