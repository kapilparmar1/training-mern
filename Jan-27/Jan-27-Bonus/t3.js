const Name = () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve("");
  });
  return promise1;
};

const New = () => {
  let r = Name();
  r.then(() => {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(2 * i);
      }, i * 2000);
    }
  });
};

New();
