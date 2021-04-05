const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  authors: {
    type: Array,
    required:
      "An array of authors is required (a single author should still be provided in an array)",
  },
  description: {
    type: String,
    required: "Description is required",
  },
  image: {
    type: String,
    default:
      "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg",
  },
  link: {
    type: String,
    required: "Link is required",
  },
  date: { type: Date, default: Date.now },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
