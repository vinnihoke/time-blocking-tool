import React from 'react'
import axios from 'axios';
import { Authorization } from '../helpers/Authorization';

const Landing = () => {
	Authorization()
	return (
		<div>
			<a href={`${process.env.REACT_APP_BASE_URL}/connect/google`}>
				<button className="ui button">Continue with Google</button>
			</a>
		</div>
	)
}

export default Landing
