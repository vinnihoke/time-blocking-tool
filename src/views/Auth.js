import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useLocalStorage } from '../helpers/useLocalStorage.js'
import { setUser, useGlobalContext } from '../context/globalContext.js'
import axios from 'axios'
import { axiosWithAuth } from '../helpers/axiosWithAuth.js'

const Auth = () => {

	let history = useHistory()
	const { token } = useParams()
	const [validation, setValidation] = useLocalStorage("token", 'test');

	if (window.localStorage.getItem('token')) {
		axiosWithAuth().post("http://localhost:3200/auth/login")
			.then(res => setValidation(res.data))
			.catch(err => console.log(err))
	} else {
		setValidation(token)
		axiosWithAuth().post("http://localhost:3200/auth/login")
			.then(res => setValidation(res.data))
			.catch(err => console.log(err))
	}


	// axios.post("http://localhost:3200/auth/login", {
	// 	headers: {
	// 		Authorization: token
	// 	}
	// })
	// 	.then(res => setValidation(res.data))
	// 	.catch(err => console.log(err))

	console.log(validation)




	return (
		<div>
			<div className="ui active centered inline loader"></div>
		</div>
	)
}

export default Auth
