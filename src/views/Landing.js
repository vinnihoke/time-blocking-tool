import React from 'react'
import axios from 'axios';
import { Authorization } from '../helpers/Authorization';

const Landing = () => {
	Authorization()
	return (
		<section id="Landing" className="ui container">
			<aside className="landing-column">
				<h1>Welcome to Time Blocking</h1>
				<p>Delegate specific widows of time for deep work.</p>
			</aside>
			<aside className="landing-column">
				<div className="landing-card">
					<h3>Let's get you started!</h3>
					<br></br>
					<a href={`${process.env.REACT_APP_BASE_URL}/connect/google`}>
						<button className="ui button red">
							<i className="icon google"></i>
							Continue with Google
							</button>
					</a>
				</div>
			</aside>
		</section>
	)
}

export default Landing
