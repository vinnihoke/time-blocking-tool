import React from 'react'
import { useHistory } from 'react-router-dom'

const Navbar = () => {

	const history = useHistory()

	const handleLogout = () => {
		window.localStorage.removeItem("token")
		window.localStorage.removeItem("state")
		history.push('/')
	}

	return (
		<section id="Navbar">
			<div className="ui container">
				<div className="ui middle aligned four column centered grid">
					<div className="row">
						<div className="column left floated left aligned">
							<h2>Time Blocking</h2>
						</div>

						{window.localStorage.getItem("token") ? (
							<div className="column right floated right aligned">
								<i className="icon large sign-out" onClick={handleLogout}></i>
							</div>
						) : (
								null
							)
						}

					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar
