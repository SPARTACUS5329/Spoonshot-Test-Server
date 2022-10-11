import express from "express";
import {
	addBooksToInventory,
	getBooks,
	getInventory,
	updateInventory,
} from "../controllers/books.js";

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.get("/inventory", getInventory);
bookRouter.post("/inventory", addBooksToInventory);
bookRouter.put("/inventory", updateInventory);

export default bookRouter;
