import axios from "../config/_axios.js";
import Book from "../models/book.js";
import dotenv from "dotenv";
dotenv.config();

export const getBooks = async (req, res) => {
	let { title, author } = req.query;
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

export const getInventory = async (req, res) => {
	try {
		const result = await Book.find({});
		res.status(200).send(result);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};

export const addBooksToInventory = async (req, res) => {
	const { inventory: books } = req.body;
	try {
		const inventory = await Book.find({});
		let diffs = [];
		let map = {};
		inventory.map((book, index) => {
			map[book.googleBookID] = index;
		});
		books.map((book) => {
			if (Object.hasOwn(map, book.googleBookID)) {
				if (inventory[map[book.googleBookID]].stock !== book.stock) {
					inventory[map[book.googleBookID]].stock += book.stock;
					inventory[map[book.googleBookID]].save();
				}
			} else diffs = [...diffs, book];
		});
		Book.insertMany(diffs);
		res.status(200).send("Successfully added");
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};

export const updateInventory = async (req, res) => {
	const { inventory: books } = req.body;
	try {
		const inventory = await Book.find({});
		let map = {};
		inventory.map((book, index) => {
			map[book.googleBookID] = index;
		});
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
