const express = require("express");
const app = express();
const router = express.Router();

let myList = [];
router
  .route("/")
  .get((req, res) => {
    res.send(myList);
  })
  .post((req, res) => {
    let flag = false;
    if (!req.body.id || !req.body.itemName)
      return res.status(500).send("All fields are required");
    if (myList.length === 0) {
      myList = [...myList, req.body];
      res.status(201).send(myList);
    }
    myList.filter((data) => {
      if (data.id === req.body.id) {
        flag = true;

        res.status(201).send(myList);
      }
    });

    if (!flag) {
      myList = [...myList, req.body];
      res.status(404).send(myList);
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
    if (!req.body.itemName)
      return res.status(500).send("Item Name is required");

    let flag = false;
    myList.filter((data) => {
      if (data.id === req.params.id) {
        data.itemName = req.body.itemName;
        flag = true;
        res.status(201).send(myList);
      }
    });
    if (!flag) return res.status(404).send("Not Present");
  })
  .delete((req, res) => {
    let flag = false;
    myList.filter((data, index) => {
      if (data.id === req.params.id) {
        myList.splice(index, 1);
        flag = true;
        res.send("Deleted item is : " + JSON.stringify(data));
      }
    });
    if (!flag) {
      res.send("Not Present");
    }
  });

router
  .route("*")
  .get((req, res) => {
    res.send("Invalid URL");
  })
  .patch((req, res) => {
    res.send("Invalid URL");
  })
  .delete((req, res) => {
    res.send("Invalid URL");
  })
  .put((req, res) => {
    res.send("Invalid URL");
  })
  .post((req, res) => {
    res.send("Invalid URL");
  });
app.use((err, req, res, next) => {
  res.send({ message: "Server Error" });
});

module.exports = router;
