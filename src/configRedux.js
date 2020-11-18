import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer/index.js';

const loadLocal = () => {
	try {
		const serializedState = window.localStorage.getItem('state');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e.message);
		return undefined;
	}
};

const persistedState = loadLocal();

const configRedux = () =>
	createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

export default configRedux;
