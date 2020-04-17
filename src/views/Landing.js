import React from 'react'

import { Row, Col } from 'antd'

const Landing = () => {

	return (
		<section id="Landing" className="ui container">
			<Row align="middle" justify="center" style={{ width: "100%" }}>
				<Col xs={24} sm={12} align="middle">
					<div>
						<h1>Welcome to Time Blocking</h1>
						<p>Dedicate specific windows of time for deep work.</p>
					</div>
					{/* <div style={{ paddingTop: 50 }}>
					<h3>How does it work?</h3>
					<h5>Step 1</h5>
					<p>Add a time block and set a window of time.</p>
					<h5>Step 2</h5>
					<p>Add a few tasks.</p>
					<h5>Step 3</h5>
					<p>Complete tasks during time block.</p>
					<h5>Step 4</h5>
					<p>Didn't finish all tasks? Don't sweat it! Pick them up the next time that time block rolls around.</p>

				</div> */}
				</Col>
				<Col xs={24} sm={12} align="middle">
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
				</Col>
			</Row>
		</section >
	)
}

export default Landing
