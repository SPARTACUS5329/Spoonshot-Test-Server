import Axios from "axios";

// URL for Google Books API
const baseURL = `${process.env.BOOKS_API_URL}`;

// Creating an axios instance for requests
const axios = Axios.create({
	baseURL,
	withCredentials: true, // For passing the valid credentials to get a response
});

export default axios;
