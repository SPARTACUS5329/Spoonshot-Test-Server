const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URI =
	// eslint-disable-next-line no-undef
	process.env.NODE_ENV === "production" ? process.env.dataBaseURL : "mongodb://127.0.0.1:27017";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoCreate: true,
		});

		console.log("MongoDB database connection established successfully");
	} catch (error) {
		console.error(error.message);
		console.log("MongoDB connection error. Please make sure MongoDB is running.");
		// eslint-disable-next-line no-undef
		process.exit(1);
	}
};

module.exports = connectToMongoDB;
