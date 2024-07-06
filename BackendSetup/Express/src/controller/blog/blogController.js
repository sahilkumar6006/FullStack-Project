const { sendSuccess, sendError } = require("../../util/responseHandeler.js");
const userModel= require('../../model/userModel.js');

//
exports.createBlog = async (req, res) => {
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
exports.viewBlog = async (req, res) => {
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
exports.blogDetail = async (req, res) => {
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

 
exports.updateBlog = async (req, res) => {
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
exports.deleteBlog = async (req, res) => {
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
