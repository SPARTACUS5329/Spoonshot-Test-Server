const express = require("express");
const bookRouter = require("./books");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
	res.send("42");
});

apiRouter.use("/books", bookRouter);

module.exports = apiRouter;
