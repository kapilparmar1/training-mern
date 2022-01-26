let promise1 = new Promise((resolve, reject) => {
  let fetchRes = fetch(
    "https://www.javascripttutorial.net/sample/promise/api.json"
  );

  fetchRes
    .then((res) => res.json())
    .then((d) => {
      console.log(d);
    });
});
