const express = require("express");
const bookRouter = require("./books");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
	res.send("42");
});

apiRouter.use("/company", bookRouter);

module.exports = apiRouter;
