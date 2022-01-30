const Name = () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve("2");
  });
  return promise1;
};

const New = async () => {
  let r = await Name();
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(r * i);
    }, i * 2000);
  }
};
New();
