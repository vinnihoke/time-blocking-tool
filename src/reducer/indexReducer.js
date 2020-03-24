import _ from 'lodash'

const initialState = {
	user: {},
	timeblocks: [],
	tasks: []
}

const indexReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.payload };
		case "SET_TIMEBLOCKS":
			return { ...state, timeblocks: _.uniqBy([...state.timeblocks, ...action.payload], "id") };
		case "ADD_TIMEBLOCK":
			return { ...state, timeblocks: [...state.timeblocks, action.payload] };
		case "REMOVE_TIMEBLOCK":
			return { ...state, timeblocks: state.timeblocks.filter(timeblock => timeblock.id !== action.payload.id) };

		case "SET_TASKS":
			return { ...state, tasks: _.uniqBy([...state.tasks, ...action.payload], "id") };
		case "ADD_TASK":
			return { ...state, tasks: [...state.tasks, action.payload] };
		case "REMOVE_TASK":
			return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) };
		case "MODIFY_TASK":
			const updated = { ...state, tasks: state.tasks.splice(state.tasks.findIndex(({ id }) => id === action.payload.id), 1, action.payload) }
			return state
		default:
			return state
	}
}

export default indexReducer
