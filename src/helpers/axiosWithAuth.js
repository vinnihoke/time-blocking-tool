import axios from 'axios';

const AxiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: JSON.parse(token),
		},
	});
};

export default AxiosWithAuth