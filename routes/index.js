import express from "express";
import bookRouter from "./books.js";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
	res.send("42");
});

apiRouter.use("/books", bookRouter);

export default apiRouter;
