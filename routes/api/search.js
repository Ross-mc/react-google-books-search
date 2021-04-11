const router = require("express").Router();
const googleController = require("../../controllers/googleController");


//due to express routing, the "/" matches "/api/search" 
// because of the folder/file structure
router.route("/")
  .post(googleController.search)
//sends get and post requests on default route
//to the books controller which posts to mongodb

module.exports = router