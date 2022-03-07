const express = require("express");
const app = express();

const port = 3000;

const commonMiddleware1 = (req, res, next) => {
  console.log("COMMON MIDDLEWARE1");
  req_URL = req.url;
  req_PARAM = req.params;
  req.userId = 13;
  next();
};
const commonMiddleware2 = (req, res, next) => {
  console.log("DATA from MIDDLEWARE1 :", req.userId);

  req.userId = 14;
  next();
};
const commonMiddleware3 = (req, res, next) => {
  console.log("COMMON MIDDLEWARE3");
  console.log("DATA from MIDDLEWARE2 :", req.userId);
  req.userId = 15;
  next();
};

const middleware = [commonMiddleware1, commonMiddleware2, commonMiddleware3];

app.get("/:id", middleware, (req, res) => {
  console.log("Requested URL is :", req_URL);
  console.log("Requested URL Param is :", req_PARAM);
  console.log("id : ", req.userId);
  res.send("It is Home page");
});

app.listen(port, () => {
  console.log("Server is running on ", port);
});
