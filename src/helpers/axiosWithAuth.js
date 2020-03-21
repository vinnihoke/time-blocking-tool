import axios from 'axios';

const AxiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			baseURL: process.env.REACT_APP_BASE_URL,
			Authorization: JSON.parse(token),
		},
	});
};

export default AxiosWithAuth