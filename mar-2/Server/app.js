const express = require("express");
const app = express();
// const url = require("url");

const port = 8000;
const author = [
  {
    id: 1,
    name: "Shakespear",
  },
  {
    id: 2,
    name: "Hellen Killer",
  },
  {
    id: 3,
    name: "Chetan Bhagat",
  },
];

const users = [
  {
    id: 1,
    name: "Suraj",
  },
  {
    id: 2,
    name: "Ajay",
  },
  {
    id: 3,
    name: "Apple",
  },
];
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.status(200);
  res.send("Welcome to Express Js");
});
app.get("/authors", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.status(200);
  res.send(author);
});
app.get("/user/:id", (req, res) => {
  res.status(200);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  switch (req.params.id) {
    case "1":
      res.send(users[0]);

      break;
    case "2":
      res.send(users[1]);
      break;
    case "3":
      res.send(users[2]);
      break;
    default:
      res.status(404);
      res.send("Invalid URL ");
  }
});

app.listen(port, () => {
  console.log("running on : ", port);
});
