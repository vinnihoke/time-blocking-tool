import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard.js';
import Auth from './pages/Auth.js';
import Landing from './pages/Landing.js';
import configRedux from './redux/configRedux.js';
import Navbar from './components/layout/Navbar.js';

const saveLocal = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		window.localStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e.message);
	}
};

const store = configRedux();

store.subscribe(() => saveLocal(store.getState()));

export default function App() {
	return (
		<>
			<Provider store={store}>
				<main id="Entry">
					<Navbar />
					<Landing />
					<Auth />
					<Dashboard />
				</main>
			</Provider>
		</>
	);
}
