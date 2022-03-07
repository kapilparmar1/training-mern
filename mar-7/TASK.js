const express = require("express");
const app = express();

const port = 4000;
let myData = [];

app.use(express.urlencoded());
app.use(express.json());

app.post("/", (req, res) => {
  if (myData.length === 0) {
    myData = [...myData, req.body];
    res.send(myData);
  } else {
    myData.filter((data) => {
      if (data.id === req.body.id) {
        res.send(myData);
      }
    });
  }
});

app.get("/", (req, res) => {
  res.send(myData);
});

app.get("/:id", (req, res) => {
  console.log("ID is : ", req.params.id);
  let localData = myData.filter((data) => {
    if (data.id === req.params.id) {
      return data;
    }
  });
  res.send(localData);
});

app.delete("/:id", (req, res) => {
  console.log("req :", req.params.id);
  let flag = false;
  myData.filter((data, index) => {
    if (data.id === req.params.id) {
      myData.splice(index, 1);
      flag = true;
      res.send("Deleted");
    }
  });
  if (!flag) {
    res.send("Not Present");
  }
});

app.put("/:id", (req, res) => {
  let flag = false;
  myData.filter((data, index) => {
    if (data.id === req.params.id) {
      myData.splice(index, 1, req.body);
      flag = true;
      res.send("Edited");
    }
  });
  if (!flag) {
    res.send("Not Present");
  }
});
app.listen(port, () => {
  console.log("Server is running on ", port);
});
