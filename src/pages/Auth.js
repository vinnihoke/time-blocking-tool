import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axiosWithAuth from '../helpers/axiosWithAuth.js';
import actions from '../actions/index.js';

export default function Auth() {
	const history = useHistory();
	const { token } = useParams();
	const dispatch = useDispatch();

	const localToken = window.localStorage.getItem('token');
	if (!localToken) {
		window.localStorage.setItem('token', token);
	}

	useEffect(() => {
		const call = async () => {
			try {
				const login = await axiosWithAuth().post('/auth/login');
				dispatch(actions.indexActions.setUser(login.data.request));
				console.log(login);
				if (login) {
					history.push(`/dashboard/${login.data.request.id}`);
				} else {
					history.push(`/`);
				}
			} catch (e) {
				console.log(e.message);
			}
		};
		call();
	}, []);

	return (
		<div>
			<div className="ui active centered inline loader" />
		</div>
	);
}
