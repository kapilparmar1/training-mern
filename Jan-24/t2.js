function find(even, odd) {
  console.log("Even is : " + even);
  console.log("Odd is : " + odd);
}

function main(callback) {
  let array = [1, 2, 3, 4, 5, 6];
  let odd = [];
  let even = [];

  for (let k = 0, i = 0, j = 0; k < array.length; k++) {
    // let x = 0;
    if (array[k] % 2 == 0) {
      even[i] = array[k];
      i++;
    } else {
      odd[j] = array[k];
      j++;
    }
  }

  callback(even, odd);
}

main(find);
