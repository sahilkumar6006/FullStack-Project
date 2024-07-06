const { prefix } = require('../../config/apiConfig');
const blogController = require('../controller/blog/blogController.js');
const tokenVerification = require('../middleware/tokenVerification.js');
 
module.exports = function (app) {
  app.post(`${prefix}/create/blog`, tokenVerification ,blogController.createBlog );
  app.get(`${prefix}/view/blog/:id`, tokenVerification , blogController.viewBlog );
  app.get(`${prefix}/blog/detail/:id`, tokenVerification , blogController.blogDetail );
  app.post(`${prefix}/update/blog`, tokenVerification , blogController.updateBlog );
  app.post(`${prefix}/delete/blog`, tokenVerification , blogController.deleteBlog );
};