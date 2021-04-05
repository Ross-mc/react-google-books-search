const router = require("express").Router();
const booksController = require("../../controllers/booksController");


//due to express routing, the "/" matches "/api/books" 
// because of the folder/file structure
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create)
//sends get and post requests on default route
//to the books controller which posts to mongodb

module.exports = router;