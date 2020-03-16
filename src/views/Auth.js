// @ts-check

import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Router } from 'react-router-dom'
import { useLocalStorage } from '../helpers/useLocalStorage.js'
import { setUser, useGlobalContext } from '../context/globalContext.js'
import { axiosWithAuth } from '../helpers/axiosWithAuth.js'


const Auth = () => {

	let history = useHistory()
	const { token } = useParams()
	const { context, dispatch } = useGlobalContext()
	const localToken = window.localStorage.getItem("token")
	if (!localToken) {
		window.localStorage.setItem("token", JSON.stringify(token))
	}

	useEffect(() => {
		const call = async () => {
			try {
				let login = await axiosWithAuth().post("http://localhost:3200/auth/login")
				// await dispatch(setUser(login.data.request))
				await dispatch(setUser(login.data.request))
				if (login) {
					history.push(`/dashboard/${login.data.request.id}`)
				} else {
					history.push(`/welcome`)
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
