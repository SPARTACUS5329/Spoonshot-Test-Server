const express = require("express");
const { getBooks } = require("../controllers/books");

const bookRouter = express.Router();

bookRouter.get("/", getBooks);

module.exports = bookRouter;
