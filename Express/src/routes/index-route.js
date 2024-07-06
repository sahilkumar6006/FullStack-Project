const authRoutes = require('./admin-auth-route.js');
const blogRoute = require('./blog-route.js');
const jobRoutes = require('./job-route.js');
 

module.exports = function (app) {
  // authRoutes(app);
  // blogRoute(app);
  // adminGlobalROute(app);
  // centerAuthRoutes(app);
  // Add other route files as needed
  jobRoutes(app);
  
};