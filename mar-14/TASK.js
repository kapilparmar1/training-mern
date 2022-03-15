const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: "Images",
  filename: (req, file, cb) => {
    cb(null, file.originalname.toString());
  },
});

const upLoad = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.pdf$/)) {
      console.log("wrong file ext");
      return cb(null, false);
    }
    cb(null, true);
  },
});
app.post("/", upLoad.array("pdf"), (req, res) => {
  res.send("Home");
});
app.listen(8000, () => {
  console.log("Server running on ", 8000);
});
