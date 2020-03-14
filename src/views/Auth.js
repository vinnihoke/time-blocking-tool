import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { setUser, useGlobalContext } from '../context/globalContext.js'
import axios from 'axios'

const Auth = () => {

	let history = useHistory()
	const { token } = useParams()
	let check = window.localStorage.getItem('token')
	if (check) {
		// TODO I think these both will need an axios call to login. Or validate the token.
		// TODO Restricted middleware is not functioning properly.
		window.localStorage.setItem('token', token)
		// history.push("/dashboard/1")
		console.log(typeof token)
		axios.post("http://localhost:3200/auth/login", token).then(res => console.log(res)).catch(err => console.log(err))
	} else {
		// history.push("/dashboard/1")
	}




	return (
		<div className="ui active centered inline loader"></div>
	)
}

export default Auth
