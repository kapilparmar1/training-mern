const Event = require("events");
const event = new Event();
let Number = 5;
const SETTIMEOUT = () => {
  for (i = 0; i < 1000; i++) {
    setTimeout(() => {
      console.log("SETTIMEOUT : ", Number);
    }, i * 2000);
  }
};

const SETINTERVAL = () => {
  setInterval(() => {
    console.log("SETINTERVAL : ", Number);
    event.emit("Call");
  }, 2000);
};

SETINTERVAL();
SETTIMEOUT();

event.on("Call", () => console.log("Emitter : ", Number));
