const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  TransactionID: { type: String, required: true },
  CustomerName: { type: String, required: true },
  TransactionDate: { type: Date, required: true },
  Amount: { type: Number, required: true },
  Status: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    required: true,
  },
  InvoiceURL: { type: String, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
