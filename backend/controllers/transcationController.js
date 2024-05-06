const Transaction = require("../models/Transaction");

var csv = require("csvtojson");

const uploadFile = async (req, res) => {
  try {
    var transcationData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (var x = 0; x < response.length; x++) {
          transcationData.push({
            TransactionID: response[x].TransactionID,
            CustomerName: response[x].CustomerName,
            TransactionDate: response[x].TransactionDate,
            Amount: response[x].Amount,
            Status: response[x].Status,
            InvoiceURL: response[x].InvoiceURL,
          });
        }

        await Transaction.insertMany(transcationData);
      });

    res.send({
      status: 200,
      success: true,
      message: "File uploaded successfully",
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};

module.exports = {
  uploadFile,
};
