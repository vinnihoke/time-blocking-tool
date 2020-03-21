import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../actions/index.js'

const Task = (props) => {
	const { id, timeblock_id, title, description, status, setData } = props

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const [task, setTask] = useState(props);

	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value })
	}

	const handleRemove = () => {
		dispatch(actions.indexActions.removeTask(store.user.id, id))
	}

	useEffect(() => {
		dispatch(actions.indexActions.modifyTask(task.timeblock_id, task.id, task))
	}, [handleChange])

	useEffect(() => {

	}, [handleRemove])

	return (
		<tr>
			<td>
				<div className="ui buttons">
					<select name="status" value={task.status} className="ui floating dropdown button" onChange={handleChange}>
						<option value="Completed">Completed</option>
						<option value="In Progress">In Progress</option>
						<option value="Not Completed">Not Completed</option>
					</select>
				</div>
				<i style={{ marginLeft: "5px" }} className="trash alternate outline icon" onClick={handleRemove}></i>
			</td>
			<td>
				<h4>{title}</h4>
			</td>
			<td>
				{description}
			</td>
		</tr>
	)
}

export default Task
