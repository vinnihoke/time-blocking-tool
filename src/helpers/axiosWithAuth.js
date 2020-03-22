import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: process.env.REACT_APP_BASE_URL,
		headers: {
			Authorization: JSON.parse(token),
		},
	});
};

export default axiosWithAuth