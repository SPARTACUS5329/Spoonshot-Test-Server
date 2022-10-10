const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectToMongoDB = require("./config/mongodbConfig.js");
const apiRouter = require("./routes/index.js");

const PORT = process.env.PORT || 5300;
const app = express();

const main = async () => {
	await connectToMongoDB();

	app.use(
		cors({
			credentials: true,
			origin: ["http://localhost:5173"],
		})
	);

	// Parsing Request body and cookies
	app.use(bodyParser.json({ limit: "50mb" }));
	app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

	app.use("/", apiRouter);

	//Starting the server
	app.listen(PORT, () => {
		console.log("Connected to the database successfully");
		console.log(`API Server running on PORT: ${PORT}`);
	});
};

main();
