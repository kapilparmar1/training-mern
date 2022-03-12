const express = require("express");
const router = require("./myRoutes");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/items", router);

app.listen(port, () => {
  console.log("Server is running on  : ", port);
});
