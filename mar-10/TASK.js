const express = require("express");
const router = require("./myRoutes");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use("/items", router);

app.listen(port, () => {
  console.log("Server is running on  : ", port);
});
