import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

function sendQuiz(quiz) {
	try {
		const response = axios.post(`${baseURL}/`, { quiz });
		return response
	}
	catch (err) { return err.response }
}

export { sendQuiz }