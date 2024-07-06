const { prefix } = require('../../config/apiConfig');
const adminAuthController = require('../controller/auth/authController.js');
const tokenVerification = require('../middleware/tokenVerification.js');
 
module.exports = function (app) {
  app.post(`${prefix}/login`,adminAuthController.login );
  //app.post(`${prefix}/change/password`, tokenVerification , adminAuthController.changePassword );

};