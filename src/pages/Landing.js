import React from 'react';
import styles from '../styles/modules/landing.module.scss';

export default function Landing() {
	return (
		<section className={styles.root}>
			<div>
				<h1>Time Blocking Tool</h1>
				<p>Dedicate specific windows of time for deep work.</p>
			</div>
			<div>
				<h3>Let's get started!</h3>
				<a
					className={styles.signIn}
					href={`${process.env.REACT_APP_BASE_URL}/connect/google`}
				>
					Continue with Google
					<i className="fab fa-google" />
				</a>
			</div>
		</section>
	);
}
