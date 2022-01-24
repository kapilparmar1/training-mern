const array = [1, 2, 3, 4, 5, 6];
function atLeastTwo(array, a) {
  console.log(a());
}

function Even() {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      count++;
    }
  }
  if (count >= 2) {
    return true;
  } else {
    return false;
  }

  //  atLeastTwo(array,count);
}

atLeastTwo(array, Even);
