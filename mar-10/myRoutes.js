const express = require("express");
const app = express();
const router = express.Router();

let myList = [];

router
  .route("/")
  .get((req, res) => {
    res.render("test", { myList });
  })
  .post((req, res) => {
    let flag = false;
    if (myList.length === 0) {
      myList = [...myList, req.body];

      res.send(myList);
    }
    myList.filter((data) => {
      if (data.id === req.body.id) {
        flag = true;

        res.send(myList);
      }
    });

    if (!flag) {
      myList = [...myList, req.body];
      res.send(myList);
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    let flag = false;
    myList.filter((data) => {
      if (data.id === parseInt(req.params.id)) {
        flag = true;
        res.send(data);
      }
    });

    if (!flag) {
      res.send("Not Present");
    }
  })
  .patch((req, res, next) => {
    if (req.query.itemName.length < 0) {
      next();
    } else {
      let flag = false;
      myList.filter((data) => {
        if (data.id === parseInt(req.params.id)) {
          console.log("Called");
          data.itemName = req.query.itemName;
          flag = true;
          res.send(data);
        }
      });
      if (!flag) {
        res.send("Not Present");
      }
    }
  })
  .delete((req, res) => {
    let flag = false;
    myList.filter((data, index) => {
      if (data.id === parseInt(req.params.id)) {
        myList.splice(index, 1);
        flag = true;
        res.send("Deleted item is : " + JSON.stringify(data));
      }
    });
    if (!flag) {
      res.send("Not Present");
    }
  });

app.use((err, req, res, next) => {
  res.send({ message: "Server Error" });
});

module.exports = router;
