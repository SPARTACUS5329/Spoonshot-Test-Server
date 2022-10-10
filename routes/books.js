const express = require("express");
const { getBooks } = require("../controllers/books");

const bookRouter = express.Router();

// companyRouter.post("/register", register);

module.exports = bookRouter;
