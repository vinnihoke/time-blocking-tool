import React from 'react';

export default function Landing() {
	return (
		<section id="Landing" className="ui container">
			<div align="middle" justify="center" style={{ width: '100%' }}>
				<div xs={24} sm={12} align="middle">
					<div>
						<h1>Welcome to Time Blocking</h1>
						<p>Dedicate specific windows of time for deep work.</p>
					</div>
				</div>
				<div xs={24} sm={12} align="middle">
					<div className="landing-card">
						<h3>Let's get you started!</h3>
						<br />
						<a
							href={`${process.env.REACT_APP_BASE_URL}/connect/google`}
						>
							<button type="button" className="ui button red">
								<i className="icon google" />
								Continue with Google
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
