import express from "express";
import bookRouter from "./books.js";

const apiRouter = express.Router();

apiRouter.use("/books", bookRouter);

export default apiRouter;
