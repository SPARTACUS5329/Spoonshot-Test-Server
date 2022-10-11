import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Conditional assignment of mongodb database url
const MONGODB_URI = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// Connects to the given database
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

export default connectToMongoDB;
