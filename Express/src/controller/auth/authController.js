const { sendSuccess, sendError } = require("../../util/responseHandeler.js");
const userModel= require('../../model/userModel.js');

//
exports.login = async (req, res) => {
  const { email, password } = req.body;
   try {
    const data = { email, password };
    sendSuccess(res, data, "Success");
    return;
  } catch (error) {
    sendError(res, 400, error);
    return;
  }
};

//
exports.changePassword = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = { email, password };
    sendSuccess(res, data, "Success");
    return;
  } catch (error) {
    sendError(res, 400, error);
    return;
  }
};
