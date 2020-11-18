import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...otherprops }) => (
	<Route
		{...otherprops}
		render={(props) =>
			localStorage.getItem('token') ? (
				<Component {...props} />
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

export default PrivateRoute;
