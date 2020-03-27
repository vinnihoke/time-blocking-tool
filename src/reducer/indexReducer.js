import _ from 'lodash'
import actions from '../actions/index.js'

const initialState = {
	user: {},
	timeblocks: [],
	tasks: [],
	timeblockForm: {
		title: '',
		description: '',
	},
	taskForm: {
		title: '',
		description: '',
	},
	editing: false
}

const indexReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.payload };
		case "TOGGLE_EDIT":
			return { ...state, editing: action.payload };
		case "SET_TIMEBLOCKS":
			return { ...state, timeblocks: _.uniqBy([...state.timeblocks, ...action.payload], "id") };
		case "ADD_TIMEBLOCK":
			return { ...state, timeblocks: [...state.timeblocks, action.payload] };
		case "EDIT_TIMEBLOCK":
			return {
				...state, timeblockForm: {
					id: action.payload.id,
					title: action.payload.title,
					description: action.payload.description
				}
			};
		case "MODIFY_TIMEBLOCK":
			return { ...state, timeblocks: state.timeblocks.map(timeblock => timeblock.id === action.payload.id ? action.payload : timeblock) }
		case "REMOVE_TIMEBLOCK":
			return { ...state, timeblocks: state.timeblocks.filter(timeblock => timeblock.id !== action.payload.id) };

		case "SET_TASKS":
			return { ...state, tasks: _.uniqBy([...state.tasks, ...action.payload], "id") };
		case "ADD_TASK":
			return { ...state, tasks: [...state.tasks, action.payload] };
		case "EDIT_TASK":
			return {
				...state, taskForm: {
					id: action.payload.id,
					title: action.payload.title,
					description: action.payload.description
				}
			};
		case "REORDER_TASKS":
			return { ...state, tasks: action.payload };
		case "REMOVE_TASK":
			return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) };
		case "MODIFY_TASK":
			const updated = { ...state, tasks: state.tasks.splice(state.tasks.findIndex(({ id }) => id === action.payload.id), 1, action.payload) }
			return state
		// TODO This is causing an infinite loop... Probably because the toggle for the completed. 👇
		// return { ...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) }
		default:
			return state
	}
}

export default indexReducer
