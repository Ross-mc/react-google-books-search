const router = require("express").Router();
const booksController = require("../../controllers/booksController");


//due to express routing, the "/" matches "/api/books" 
// because of the folder/file structure
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create)
//sends get and post requests on default route
//to the books controller which posts to mongodb

//remove, findbyid update
//uses param route to target the necessary book
router.route("/:id")
  .delete(booksController.remove)
  .put(booksController.update)
  .get(booksController.findById)


module.exports = router;