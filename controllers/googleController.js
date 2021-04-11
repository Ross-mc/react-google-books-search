const axios = require("axios");
require("dotenv").config()
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

module.exports = {
  search: ({ body }, res) => {
    const { searchTerm } = body;
    const formattedSearchTerm = searchTerm.trim().replace(/\s/g,"-");//remove leading and ending white spaces, change internal spaces to dash
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm}&key=${API_KEY}`
      )
      .then((result) => res.json(result.data))
      .catch((err) => res.status(400).json(err));
  },
};
