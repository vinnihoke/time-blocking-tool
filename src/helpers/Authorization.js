import { useHistory } from 'react-router-dom'

const Authorization = () => {
	let history = useHistory()
	const existingToken = window.localStorage.getItem('token')
	if (existingToken) {
		history.push(`/auth/${existingToken}`)
	}
}

export default Authorization