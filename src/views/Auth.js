// @ts-check

import React, { useEffect } from 'react'
import { useParams, useHistory, Router } from 'react-router-dom'
import { setUser, useGlobalContext } from '../context/globalContext.js'
import { AxiosWithAuth } from '../helpers/AxiosWithAuth.js'


const Auth = () => {

	let history = useHistory()
	const { token } = useParams()
	const { dispatch } = useGlobalContext()
	const localToken = window.localStorage.getItem("token")
	if (!localToken) {
		window.localStorage.setItem("token", JSON.stringify(token))
	}

	useEffect(() => {
		const call = async () => {
			try {
				let login = await AxiosWithAuth().post("http://localhost:3200/auth/login")
				await dispatch(setUser(login.data.request))
				if (login) {
					history.push(`/dashboard/${login.data.request.id}`)
				} else {
					history.push(`/`)
				}
			} catch (e) {
				console.log(e.message)
			}
		}
		call()


	}, [dispatch])

	return (
		<div>
			<div className="ui active centered inline loader"></div>
		</div>
	)
}

export default Auth
