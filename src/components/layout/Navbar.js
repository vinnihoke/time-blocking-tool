import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';

const Navbar = () => {
	const history = useHistory();

	const handleLogout = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('state');
		history.push('/');
	};

	return (
		<section id="Navbar">
			{/* <div className="ui container"> */}
			<Row
				justify="end"
				style={{
					padding: '10px',
					width: '100%',
					maxWidth: '1125px',
					margin: '0 auto',
				}}
			>
				<Col span={23}>
					<h2>Time Blocking</h2>
				</Col>
				<Col span={1}>
					{window.localStorage.getItem('token') ? (
						<div className="column right floated right aligned">
							<i
								className="icon large sign-out"
								onClick={handleLogout}
							/>
						</div>
					) : null}
				</Col>
			</Row>
			{/* </div> */}
		</section>
	);
};

export default Navbar;
