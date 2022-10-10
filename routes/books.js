import express from "express";
import getBooks from "../controllers/books.js";

const bookRouter = express.Router();

bookRouter.get("/", getBooks);

export default bookRouter;
