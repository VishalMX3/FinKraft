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

app.get("/", function (req, res) {
  res.send("Helloz!");
});

const transactionRoute = require("./routes/transactionRoute");

app.use("/", transactionRoute);

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
