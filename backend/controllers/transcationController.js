const uploadFile = async (req, res) => {
  try {
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
