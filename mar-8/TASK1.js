const express = require("express");
const app = express();
const router = require("./routes");

const port = 4000;

app.use(express.urlencoded());
app.use(express.json());
app.use("/myRoute", router);

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.listen(port, () => {
  console.log("Server is running on ", port);
});
