const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
