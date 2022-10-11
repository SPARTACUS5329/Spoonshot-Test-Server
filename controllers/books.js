import axios from "../config/_axios.js";
import Book from "../models/book.js";
import dotenv from "dotenv";
dotenv.config();

// Gets books from Google Books API
export const getBooks = async (req, res) => {
	let { title, author } = req.query;
	// Validating for proper api call
	if (title === undefined && author === undefined) return res.status(400).send("Invalid inputs");
	if (title === undefined) title = "";
	if (author === undefined) author = "";
	try {
		const result = await axios.get(`/?q=${title}+inauthor:${author}`);
		return res.status(200).send(result.data);
	} catch (error) {
		console.log(error.message);
		return res.status(500).send({ error: "There was an error" });
	}
};

// Gets current inventory
export const getInventory = async (req, res) => {
	try {
		const result = await Book.find({});
		res.status(200).send(result);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};

// Adds books to inventory from the add page (from Google Books API)
export const addBooksToInventory = async (req, res) => {
	const { inventory: books } = req.body;
	try {
		const inventory = await Book.find({});
		let diffs = [];
		let map = {};
		// To create an O(n) solution for the books addition, a map is used
		inventory.map((book, index) => {
			map[book.googleBookID] = index;
		});
		// Mapping over the books array to conditionally save the diffs
		books.map((book) => {
			if (Object.hasOwn(map, book.googleBookID)) {
				if (inventory[map[book.googleBookID]].stock !== book.stock) {
					inventory[map[book.googleBookID]].stock += book.stock;
					inventory[map[book.googleBookID]].save();
				}
			} else diffs = [...diffs, book];
		});
		// Finally inserting diffs
		Book.insertMany(diffs);
		res.status(200).send("Successfully added");
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};

// Updates the inventory from the inventory page
export const updateInventory = async (req, res) => {
	const { inventory: books } = req.body;
	try {
		const inventory = await Book.find({});
		let map = {};
		// To create an O(n) solution for the books addition, a map is used
		inventory.map((book, index) => {
			map[book.googleBookID] = index;
		});
		// Mapping over the books array to conditionally save the diffs
		books.map(async (book) => {
			if (Object.hasOwn(map, book.googleBookID)) {
				inventory[map[book.googleBookID]].stock = book.stock;
				await inventory[map[book.googleBookID]].save();
			} else throw Error("Book not found");
		});
		res.status(200).send("Successfully added");
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};
