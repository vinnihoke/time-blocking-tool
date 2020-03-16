import React, { createContext, useReducer, useContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
	user: {
		id: null,
		username: '',
		email: '',
	},
	timeblocks: [
		{
			id: null,
			title: '',
			description: '',
			start: '',
			end: '',
			tasks: [
				{
					id: null,
					title: '',
					description: '',
					status: ''
				}
			]
		}
	],

}

// Action
export const SET_USER = "SET_USER"

// Action Creators
export const setUser = ({ id, username, email }) => {
	return { type: SET_USER, id, username, email }
}

export const GlobalReducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			console.log("Set user is firing")
			return { ...state, user: { id: action.id, username: action.username, email: action.email } };
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