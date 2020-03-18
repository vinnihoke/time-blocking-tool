import React, { createContext, useReducer, useContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
	user: {},
	timeblocks: [],
}

// Action
export const SET_USER = "SET_USER"
export const SET_TIMEBLOCKS = "SET_TIMEBLOCKS"
export const SET_TASKS = "SET_TASKS"

// Action Creators
export const setUser = ({ id, username, email }) => {
	return { type: SET_USER, id, username, email }
}
export const setTimeblocks = (timeblocks) => {
	return { type: SET_TIMEBLOCKS, timeblocks }
}

export const GlobalReducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: { id: action.id, username: action.username, email: action.email } };
		case SET_TIMEBLOCKS:
			return { ...state, timeblocks: [...state.timeblocks, ...action.timeblocks] };
		default:
			return state
	}
}

const GlobalProvider = props => {
	const [context, dispatch] = useReducer(GlobalReducer, initialState);
	const globalData = { context, dispatch };
	return <GlobalContext.Provider value={globalData} {...props} />;
};

const useGlobalContext = () => {
	return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };