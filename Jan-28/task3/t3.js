let opened;
const Open = () => {
  opened = window.open("", "HEY", "width=300,height=300");
};

const Close = () => {
  opened.close();
};

const Resize = () => {
  let height = document.getElementById("h").value;
  let width = document.getElementById("w").value;
  opened.resizeTo(height, width);

  let result = document.createElement("p");
  result.innerHTML =
    "Inner Width is : " +
    opened.innerWidth +
    "Outer width is : " +
    opened.outerWidth +
    "Inner Height is : " +
    opened.innerHeight +
    "Outer Height is  : " +
    opened.outerHeight;
  opened.document.body.appendChild(result);
};
// opened.document.getElementById("show")= opened.innerWidth;
