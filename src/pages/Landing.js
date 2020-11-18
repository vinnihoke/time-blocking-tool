import React from 'react';

import { Row, Col } from 'antd';

export default function Landing() {
	return (
		<section id="Landing" className="ui container">
			<Row align="middle" justify="center" style={{ width: '100%' }}>
				<Col xs={24} sm={12} align="middle">
					<div>
						<h1>Welcome to Time Blocking</h1>
						<p>Dedicate specific windows of time for deep work.</p>
					</div>
				</Col>
				<Col xs={24} sm={12} align="middle">
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
				</Col>
			</Row>
		</section>
	);
}
