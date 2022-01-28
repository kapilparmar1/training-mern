const getElementByTagName = (value) => {
  return document.getElementsByTagName(value);
};

// console.log(getElementByTagName("p"));

const getData = () => {
  let arr = [];
  let result = getElementByTagName("p");
  let len = getElementByTagName("p").length;

  for (let i = 0; i < len; i++) {
    arr.push(result[i].innerHTML);
  }

  console.log(arr);

  alert(`The elements in p tag are \n${arr}`);
};
