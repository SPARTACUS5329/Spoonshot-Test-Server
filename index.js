import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectToMongoDB from "./config/mongodbConfig.js";
import apiRouter from "./routes/index.js";

const PORT = process.env.PORT || 8000;
const app = express();

const main = async () => {
	await connectToMongoDB();

	app.use(
		cors({
			credentials: true,
			origin: ["http://127.0.0.1:5173"],
		})
	);

	// Parsing Request body and cookies
	app.use(bodyParser.json({ limit: "50mb" }));

	app.use("/", apiRouter);

	//Starting the server
	app.listen(PORT, () => {
		console.log("Connected to the database successfully");
		console.log(`API Server running on PORT: ${PORT}`);
	});
};

main();
