import React from 'react';

export default function Navbar() {
	const handleLogout = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('state');
		// Route back to the home below
		// history.push('/');
	};

	return (
		<section id="Navbar">
			{/* <div className="ui container"> */}
			<div
				justify="end"
				style={{
					padding: '10px',
					width: '100%',
					maxWidth: '1125px',
					margin: '0 auto',
				}}
			>
				<div span={23}>
					<h2>Time Blocking</h2>
				</div>
				<div span={1}>
					{window.localStorage.getItem('token') ? (
						<div className="divumn right floated right aligned">
							<i
								className="icon large sign-out"
								onClick={handleLogout}
							/>
						</div>
					) : null}
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}
