const iM = () => {
  document.getElementById("home").style.visibility = "hidden";
  // document.getElementById("1").style.visibility = "visible";
  // document.getElementById("2").style.visibility = "visible";
  // document.getElementById("3").style.visibility = "visible";
  // document.getElementById("4").style.visibility = "visible";

  setTimeout(() => {
    document.getElementById("g1").style.visibility = "visible";
  }, 1000);
  setTimeout(() => {
    document.getElementById("g4").style.visibility = "visible";
  }, 1500);
  setTimeout(() => {
    document.getElementById("g7").style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    document.getElementById("g10").style.visibility = "visible";
  }, 2500);
  setTimeout(() => {
    document.getElementById("g2").style.visibility = "visible";
  }, 3000);
  setTimeout(() => {
    document.getElementById("g5").style.visibility = "visible";
  }, 3500);
  setTimeout(() => {
    document.getElementById("g8").style.visibility = "visible";
  }, 4000);
  setTimeout(() => {
    document.getElementById("g11").style.visibility = "visible";
  }, 4500);
  setTimeout(() => {
    document.getElementById("g3").style.visibility = "visible";
  }, 5000);
  setTimeout(() => {
    document.getElementById("g6").style.visibility = "visible";
  }, 5500);
  setTimeout(() => {
    document.getElementById("g9").style.visibility = "visible";
  }, 6000);
  setTimeout(() => {
    document.getElementById("g12").style.visibility = "visible";
  }, 6500);
  again();
};

document.getElementById("1").style.visibility = "hidden";
document.getElementById("2").style.visibility = "hidden";
document.getElementById("3").style.visibility = "hidden";
document.getElementById("4").style.visibility = "hidden";

const gif1 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "gif1.gif";

  setTimeout(() => {
    document.getElementById("g1").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g1").removeChild(Image);
  }, 11000);
};
const gif12 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "121.gif";

  setTimeout(() => {
    document.getElementById("g12").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g12").removeChild(Image);
  }, 11000);
};
const gif2 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "21.gif";

  setTimeout(() => {
    document.getElementById("g2").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g2").removeChild(Image);
  }, 11000);
};
const gif3 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "31.gif";

  setTimeout(() => {
    document.getElementById("g3").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g3").removeChild(Image);
  }, 11000);
};
const gif4 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "41.gif";

  setTimeout(() => {
    document.getElementById("g4").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g4").removeChild(Image);
  }, 11000);
};
const gif5 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "51.gif";

  setTimeout(() => {
    document.getElementById("g5").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g5").removeChild(Image);
  }, 11000);
};
const gif6 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "61.gif";

  setTimeout(() => {
    document.getElementById("g6").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g6").removeChild(Image);
  }, 11000);
};
const gif7 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "71.gif";

  setTimeout(() => {
    document.getElementById("g7").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g7").removeChild(Image);
  }, 11000);
};
const gif8 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "81.gif";

  setTimeout(() => {
    document.getElementById("g8").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g8").removeChild(Image);
  }, 11000);
};
const gif9 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";
  Image.src = "91.gif";

  setTimeout(() => {
    document.getElementById("g9").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g9").removeChild(Image);
  }, 11000);
};
const gif10 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";

  Image.src = "101.gif";

  setTimeout(() => {
    document.getElementById("g10").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g10").removeChild(Image);
  }, 11000);
};
const gif11 = () => {
  let Image = document.createElement("img");
  Image.width = 250;
  Image.height = 150;
  Image.style = "border-radius: 4%;";

  Image.src = "111.gif";

  setTimeout(() => {
    document.getElementById("g11").appendChild(Image);
  }, 500);
  setTimeout(() => {
    document.getElementById("g11").removeChild(Image);
  }, 11000);
};

const again = () => {
  setTimeout(() => {
    document.getElementById("home").style.visibility = "visible";
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";

    document.getElementById("g1").style.visibility = "hidden";
    document.getElementById("g2").style.visibility = "hidden";
    document.getElementById("g3").style.visibility = "hidden";
    document.getElementById("g4").style.visibility = "hidden";
    document.getElementById("g5").style.visibility = "hidden";
    document.getElementById("g6").style.visibility = "hidden";
    document.getElementById("g7").style.visibility = "hidden";
    document.getElementById("g8").style.visibility = "hidden";
    document.getElementById("g9").style.visibility = "hidden";
    document.getElementById("g10").style.visibility = "hidden";
    document.getElementById("g11").style.visibility = "hidden";
    document.getElementById("g12").style.visibility = "hidden";
  }, 60000);
};
