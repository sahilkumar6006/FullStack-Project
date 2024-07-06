import { prefix } from "../../config/apiConfig";


module.exports = function(app) {
  app.post(`${prefix}/create/job`, jobController.createJob)
}