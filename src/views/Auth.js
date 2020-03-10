import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import Axios from 'axios'

const Auth = () => {

	let history = useHistory()
	const { token } = useParams()
	useLocalStorage('token', token)
	history.push('/dashboard/1')


	return (
		<div className="ui active centered inline loader"></div>
	)
}

export default Auth
