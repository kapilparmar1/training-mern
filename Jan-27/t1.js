function* gen() {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let count = 0;
  step = 2;

  let len = arr1.length - 1;
  for (let i = arr1[0]; i < arr1[len]; i += step) {
    count++;
    yield i;
  }
  return count;
}

const generator = gen();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
