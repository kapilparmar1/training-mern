const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded());

app.post("/", (req, res, next) => {
  let age = req.body.age;
  if (age.length < 1) {
    next();
  } else {
    switch (true) {
      case age >= 18 && age <= 100:
        res.status(200).send("Eligible to vote");
        break;

      case age < 18 && age > 0:
        res.status(400).send("Ineligible to vote");
        break;

      default:
        res.status(402).send("Invalid Age");
        break;
    }
  }
});

app.get("*", (req, res) => {
  res.send("Error 404");
});

app.listen(port, () => {
  console.log("Server is running on  : ", port);
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send({ message: "Server Error" });
});
