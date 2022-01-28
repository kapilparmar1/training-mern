// //task1

function* naturalNumbers(t) {
  let num = 1;
  let count = 0;
  while (count < t) {
    yield num;
    num = num + 1;
    count++;
  }
}
let power1 = naturalNumbers(5);
let res1 = power1.next();
while (!res1.done) {
  console.log("Natural", res1.value);
  res1 = power1.next();
}

// //   task2

function* powerSeries(number, power, t) {
  let base = number;
  let count = 0;
  while (count < t) {
    yield Math.pow(base, power);
    base++;
    count++;
  }
}
let power = powerSeries(3, 2, 8);
let res = power.next();
while (!res.done) {
  console.log("Power Series", res.value);
  res = power.next();
}

// //   task3

function* take(n, iter) {
  let index = 0;
  for (const val of iter) {
    if (index >= n) {
      return;
    }
    index = index + 1;
    yield val;
  }
}

let power2 = take(3, ["a", "b", "c", "d", "e"]);
let res2 = power2.next();
while (!res2.done) {
  console.log("Abc series ", res2.value);
  res2 = power2.next();
}
