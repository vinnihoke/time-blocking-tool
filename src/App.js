import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import TimeblockList from './views/TimeblockList.js';
import Auth from './views/Auth.js';
import Landing from './views/Landing.js';
import PrivateRoute from './helpers/PrivateRoute.js';
import configRedux from './configRedux.js';
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

function App() {
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
						{/* <PrivateRoute exact path="/dashboard/:userid">
                <TimeblockList />
                </PrivateRoute> */}
						<PrivateRoute
							path="/dashboard/:userid"
							component={TimeblockList}
						/>
					</Switch>
				</main>
			</Provider>
		</Router>
	);
}

export default App;
