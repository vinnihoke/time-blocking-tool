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
export const setUser = user => {
	return { type: SET_USER, user }
}

export const GlobalReducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: { id: null, username: '', email: '' } };
		default:
			throw new Error()
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