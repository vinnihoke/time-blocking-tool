import React, { useEffect } from 'react'
import { useParams, useHistory, Router } from 'react-router-dom'
import AxiosWithAuth from '../helpers/axiosWithAuth.js'
import { useDispatch } from "react-redux";
import actions from "../actions/index.js";



const Auth = () => {

	let history = useHistory()
	const { token } = useParams()
	const dispatch = useDispatch();

	const localToken = window.localStorage.getItem("token")
	if (!localToken) {
		window.localStorage.setItem("token", JSON.stringify(token))
	}

	useEffect(() => {
		const call = async () => {
			try {
				let login = await AxiosWithAuth().post("/auth/login")
				dispatch(actions.indexActions.setUser(login.data.request))
				console.log(login)
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
