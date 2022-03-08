const express = require("express");
const router = express.Router();
let myData = [];

router
  .route("/students")
  .get((req, res) => {
    res.send(myData);
  })
  .post((req, res) => {
    if (myData.length === 0) {
      myData = [...myData, req.body];
      res.send(myData);
    } else {
      let result = false;
      myData.filter((data) => {
        if (data.id === req.body.id) {
          result = true;
          res.send(myData);
          //   return data;
        }
      });

      if (!result) {
        myData = [...myData, req.body];
        console.log("myDATA is : ", myData);
        res.send(myData);
      }
      //   console.log("Result is : ", result);
      //   if (result === []) {
      //     console.log("Body is : ", req.body);
      //     myData = [...myData, req.body];
      //     console.log("myDATA is : ", myData);
      //     res.send(myData);
      //   } else {
      //   }

      //   myData = [...myData, req.body];
    }
  });
router
  .route("/students/:id")
  .put((req, res) => {
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
  })
  .delete((req, res) => {
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

module.exports = router;
