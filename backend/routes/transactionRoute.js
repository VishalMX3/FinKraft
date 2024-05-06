const express = require("express");
const transcation = express();

const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

transcation.use(bodyParser.urlencoded({ extended: true }));
transcation.use(express.static(path.resolve(__dirname, "public")));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

transcation.post("/upload", upload.single("file"));

module.exports = transcation;
