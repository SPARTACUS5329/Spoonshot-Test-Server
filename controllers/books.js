import axios from "../config/_axios.js";
import dotenv from "dotenv";
dotenv.config();

const getBooks = async (req, res) => {
	const { title, author } = req.query;
	try {
		const result = await axios.get(`/?q=${title}+inauthor:${author}`);
		res.status(200).send(result.data);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: "There was an error" });
	}
};

export default getBooks;
