const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const transactionRoute = require("./routes/transactionRoute");

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/", transactionRoute);

app.listen(PORT, function () {
  console.log("App listening on port 5000!");
});
