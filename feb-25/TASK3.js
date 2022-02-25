const fs = require("fs");
const Event = require("events");
const event = new Event();

event.on("Call", () => {
  fs.appendFile("HTML.js", "DATA IS APPENDED", (err, data) => {
    if (err) console.log(err);
  });

  fs.readFile("./HTML.js", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DaTa is :", data);
    }
  });
});
event.emit("Call");
