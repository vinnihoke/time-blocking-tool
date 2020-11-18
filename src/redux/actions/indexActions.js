import axiosWithAuth from '../../helpers/axiosWithAuth.js';

// Action Creators
const setUser = (user) => (dispatch) =>
	dispatch({ type: 'SET_USER', payload: user });
const toggleEdit = (value) => (dispatch) =>
	dispatch({ type: 'TOGGLE_EDIT', payload: value });

const setTimeblocks = (userid) => (dispatch) => {
	axiosWithAuth()
		.get(`/timeblocks/${userid}`)
		.then((res) => dispatch({ type: 'SET_TIMEBLOCKS', payload: res.data }))
		.catch((err) => console.log(err));
};
const addTimeblock = (userid, timeblock) => (dispatch) => {
	axiosWithAuth()
		.post(`/timeblocks/${userid}`, timeblock)
		.then((res) => dispatch({ type: 'ADD_TIMEBLOCK', payload: res.data }))
		// .then(res => console.log(res.data))
		.catch((err) => console.log(err));
};
const editTimeblock = (current) => (dispatch) => {
	dispatch({ type: 'EDIT_TIMEBLOCK', payload: current });
};
const resetTimeblockForm = () => (dispatch) => {
	dispatch({ type: 'RESET_TIMEBLOCK_FORM' });
};
const modifyTimeblock = (userid, timeblockid, changes) => (dispatch) => {
	axiosWithAuth()
		.put(`/timeblocks/${userid}/${timeblockid}`, changes)
		.then((res) =>
			dispatch({ type: 'MODIFY_TIMEBLOCK', payload: res.data })
		)
		.catch((err) => console.log(err));
};
const removeTimeblock = (userid, timeblock) => (dispatch) => {
	axiosWithAuth()
		.delete(`/timeblocks/${userid}/${timeblock}`)
		// Res.data is returning as 1, which means it was successful. I think it needs to have the item removed sent back in order to run a filter.
		.then((res) =>
			dispatch({ type: 'REMOVE_TIMEBLOCK', payload: res.data })
		)
		.catch((err) => console.log(err));
};

const setTasks = (timeblockid) => (dispatch) => {
	axiosWithAuth()
		.get(`/tasks/${timeblockid}`)
		.then((res) => dispatch({ type: 'SET_TASKS', payload: res.data }))
		.catch((err) => console.log(err));
};
const addTask = (timeblockid, task) => (dispatch) => {
	axiosWithAuth()
		.post(`/tasks/${timeblockid}`, task)
		.then((res) => dispatch({ type: 'ADD_TASK', payload: res.data }))
		.catch((err) => console.log(err));
};
const modifyTask = (timeblockid, taskid, changes) => (dispatch) => {
	axiosWithAuth()
		.put(`/tasks/${timeblockid}/${taskid}`, changes)
		.then((res) => dispatch({ type: 'MODIFY_TASK', payload: res.data }))
		.catch((err) => console.log(err));
};
const removeTask = (timeblockid, taskid) => (dispatch) => {
	axiosWithAuth()
		.delete(`/tasks/${timeblockid}/${taskid}`)
		.then((res) => dispatch({ type: 'REMOVE_TASK', payload: res.data }))
		.catch((err) => console.log(err));
};
const reorderTasks = (tasks) => (dispatch) => {
	console.log(':54 indexActions', tasks);
	dispatch({ type: 'REORDER_TASKS', payload: tasks });
};

export default {
	setTimeblocks,
	addTimeblock,
	toggleEdit,
	editTimeblock,
	resetTimeblockForm,
	modifyTimeblock,
	removeTimeblock,
	setTasks,
	addTask,
	removeTask,
	modifyTask,
	reorderTasks,
	setUser,
};
