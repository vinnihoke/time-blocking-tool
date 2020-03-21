import React, { useState, useEffect } from 'react'
import Task from './Task.js'
import { Popup } from 'semantic-ui-react'
import dayjs from 'dayjs';
import TaskForm from '../utils/TaskForm.js'
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions/index.js";


const Timeblock = (props) => {
	const { id, title, start, end, description, tasks } = props

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(actions.indexActions.removeTimeblock(store.user.id, id))
	}

	useEffect(() => {
		dispatch(actions.indexActions.setTasks(id))
	}, [dispatch])

	useEffect(() => {

	}, [handleRemove])


	return (
		<section>
			<table className="ui small striped table">
				<thead>
					<tr>
						<th colSpan="2">
							<Popup content={description} trigger={<h3>{title}</h3>} />
						</th>
						<th>
							<i className="trash alternate outline icon" onClick={handleRemove}></i>
						</th>
					</tr>
					<tr>
						<th colSpan="3">
							{/* TODO Needs conversion to time */}
							<h4>{`${dayjs(start).format("HH:mm")} - ${dayjs(end).format("HH:mm")}`}</h4>
						</th>
					</tr>
				</thead>
				<tbody>
					{store.tasks ? store.tasks.map((task, index) => {
						if (task.timeblock_id === id) {
							return <Task key={index} {...task} />
						}
					}) : <tr><td><h4>Loading</h4></td></tr>}
				</tbody>
			</table>
			<TaskForm {...props} />
		</section>
	)
}

export default Timeblock
