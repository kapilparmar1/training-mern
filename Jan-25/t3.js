const guess = async () => {
  const Promise1 = new Promise((resolve) => {
    const num = prompt("Guess the number between 1 to 6");

    let random = Math.floor(Math.random() * 7);
    if (random == 0) {
      random += 1;
    }

    if (num == random) {
      resolve(" You score 2 points ");
    } else if (num == random + 1 || num == random - 1) {
      resolve(" You score 1 point ");
    } else {
      resolve("you score 0 :( ");
    }
  });

  Promise1.then((value) => alert(value));
};

guess();

function again() {
  guess();
}
