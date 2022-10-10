import axios from "../config/_axios.js";
import dotenv from "dotenv";
dotenv.config();

const getBooks = async (req, res) => {
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

export default getBooks;
