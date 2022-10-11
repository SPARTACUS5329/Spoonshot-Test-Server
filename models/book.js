import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	title: { type: String, require: true },
	authors: [String],
	googleBookID: { type: String, required: true, unique: true },
	googleBookETag: { type: String, required: true, unique: true },
	googleSelfLink: { type: String, required: true, unique: true },
	description: { type: String, required: false },
	thumbnail: { type: String },
	stock: { type: Number },
});

export default mongoose.model("books", bookSchema);
