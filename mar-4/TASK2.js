const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const session = require("express-session");
// TASK 1

// const bodyParser = require("body-parser");
// // create application/json parser
// const jsonParser = bodyParser.json();
// let Text = bodyParser.text();

// // create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: true });

// const middlewares = [urlencodedParser, Text, jsonParser];

// app.post("/login", middlewares, (req, res) => {
//   console.log("welcome", req.body);
//   res.send("Working");
// });

// TASK 2
// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.get("/r", (req, res) => {
//   console.log("welcome");
//   res.send("Working");
// });

// TASK 3
// app.use(morgan(" :url :method  :id"));
// morgan.token("id", (req) => req.params.id);

// app.get("/", (req, res) => {
//   console.log("welcome");
//   res.send("Working");
// });
// app.get("/:id", (req, res) => {
//   console.log("welcome", req.params.id);
//   res.send("Working");
// });

// TASK 4

// const storage = multer.diskStorage({
//   destination: (req, destination, IF) => {
//     IF(null, "Images");
//   },
//   filename: (req, fileName, IF) => {
//     console.log("fileName is :", fileName);
//     IF(null, fileName.originalname.toString());
//   },
// });

// const myMiddleware = multer({
//   storage: storage,
// });

// app.post("/upload", myMiddleware.array("myIMAGE"), (req, res) => {
//   res.send("Uploaded");
// });

// TASK 5
const mySessionMiddleware = session({
  secret: "MYSECRETISALWAYSABOOSTDRINK",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30000 }, //auto destroy the seesion after 30 secs
});
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/login", mySessionMiddleware, (req, res) => {
  req.session.Name = "MeraNaam";
  req.session.save();
  res.send("logged in");
});
app.get("/name", mySessionMiddleware, (req, res) => {
  if (req.session.Name) {
    res.send(200, req.session.Name);
  } else {
    res.send("Empty");
  }
});
app.get("/logout", mySessionMiddleware, (req, res) => {
  req.session.destroy();
  res.send("logged out");
});

app.listen(port, () => {
  console.log("Server running on :", port);
});
