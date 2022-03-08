const express = require("express");
const router = express.Router();

let myData = [];

router.get("/", (req, res) => {
  res.send("Project Home page");
});

router.get("/signup", (req, res) => {
  res.send(myData);
});
router.post("/signup", (req, res) => {
  if (myData.length === 0) {
    myData = [...myData, req.body];
    res.send(myData);
  } else {
    let result = false;
    myData.filter((data) => {
      if (data.email === req.body.email) {
        result = true;
        res.send(myData);
      }
    });

    if (!result) {
      myData = [...myData, req.body];
      res.send(myData);
    }
  }
});

router.post("/login", (req, res) => {
  let result = false;
  myData.filter((data) => {
    if (data.email === req.body.email && data.password === req.body.password) {
      result = true;
      res.send("Login successfull");
    }
  });

  if (!result) {
    res.send("Invalid Username or Password");
  }
});

router.get("/profile", (req, res) => {
  res.send(myData);
});

router
  .route("/dashboard")
  .get((req, res) => {
    res.send(myData);
  })
  .post((req, res) => {
    let result = false;
    myData.filter((data) => {
      if (
        data.email === req.body.email &&
        data.password === req.body.password
      ) {
        result = true;
        res.send("Dasboard is working fine");
      }
    });

    if (!result) {
      res.send("Invalid Username or Password");
    }
  })
  .put((req, res) => {
    let result = false;
    myData.filter((data, index) => {
      if (data.email === req.body.email) {
        result = true;
        myData.splice(index, 1, req.body);
        res.send("Edited Successfully");
      }
    });

    if (!result) {
      res.send("Not Found");
    }
  })
  .delete((req, res) => {
    let result = false;
    myData.filter((data, index) => {
      if (data.email === req.body.email) {
        result = true;
        myData.splice(index, 1);
        res.send("Deleted Successfully");
      }
    });

    if (!result) {
      res.send("Not Found");
    }
  });

module.exports = router;
