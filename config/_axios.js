import Axios from "axios";

const baseURL = `${process.env.BOOKS_API_URL}`;

const axios = Axios.create({
	baseURL,
	withCredentials: true,
});

export default axios;
