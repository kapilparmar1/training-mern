function repeat(str, repetitions, callback) {
  let res = str;
  for (let i = 0; i < repetitions; i++) {
    res = callback(res);
  }
  return res;
}

function exclaim(str) {
  return `${str}!`;
}

function doubleChars(str) {
  return str
    .split("")
    .map((char) => `${char}${char}`)
    .join("");
}

console.log(repeat("abc", 3, exclaim));
console.log(repeat("abc", 2, doubleChars));
console.log(repeat("trogdor", 3, (t) => `°${t}°`));
