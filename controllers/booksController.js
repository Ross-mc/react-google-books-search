const db = require("../models");

module.exports = {
  findAll: (req,res) => {
    db.Books
      .find({})
      .sort({date: -1})
      .then(foundBooks => res.json(foundBooks))
      .catch(err => res.status(422).json(err))
  },
  findById: (req, res) => {
    db.Books
      .findById(req.params.id)
      .then(foundBook => res.json(foundBook))
      .catch(err => res.status(422).json(err))
  },
  create: (req, res) => {
    db.Books
      .create(req.body)
      .then(createdBook => res.json(createdBook))
      .catch(err => res.status(422).json(err))
  },
  update: (req, res) => {
    db.Books
      .create(req.body)
      .then(updatedBook => res.json(updatedBook))
      .catch(err => res.status(422).json(err))
  },
  remove: (req, res) => {
    db.Books
      .findByIdAndDelete(req.params.id)
      .then(deletedBook => res.json(deletedBook))
      .catch(err => res.status(422).json(err))
  }
}
