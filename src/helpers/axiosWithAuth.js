import axios from 'axios';

const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");

	return axios.create({
		baseURL: process.env.REACT_APP_BASE_URL,
		headers: {
			Authorization: token,
		},
	});
};

export default axiosWithAuth