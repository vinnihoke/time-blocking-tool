import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard.js';
import Auth from './pages/Auth.js';
import Landing from './pages/Landing.js';
import PrivateRoute from './helpers/PrivateRoute.js';
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
		<Router>
			<Provider store={store}>
				<main id="Entry">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/auth/:token">
							<Auth />
						</Route>
						<PrivateRoute
							path="/dashboard/:userid"
							component={Dashboard}
						/>
					</Switch>
				</main>
			</Provider>
		</Router>
	);
}
