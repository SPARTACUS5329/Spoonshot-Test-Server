const getBooks = (req, res) => {
	try {
		console.log("Working");
		res.status(200).send("Working");
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
};

module.exports = { getBooks };
