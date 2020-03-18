import { useHistory } from 'react-router-dom'

export const Authorization = () => {
	let history = useHistory()
	const existingToken = window.localStorage.getItem('token')
	if (existingToken) {
		history.push(`/auth/${existingToken}`)
	}
}