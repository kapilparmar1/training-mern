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
  console.log(res.value);
  res = power.next();
}
