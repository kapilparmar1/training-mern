const express = require("express");
const app = express();

const router = require("./myRoutes");
const middlewares = [express.json(), express.urlencoded()];

const port = 5000;
app.use(middlewares);
app.use("/project", router);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log("Server running on : ", port);
});
