import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../actions/index.js'
import { Row, Col } from "antd"

const Task = React.memo((props) => {
	const { id, title, description } = props

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const [task, setTask] = useState(props);
	const [statusColor, setStatusColor] = useState('');

	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value })
		// Promise.all([set]).then(
		// 	dispatch(actions.indexActions.modifyTask(task.timeblock_id, task.id, task))
		// )

	}

	const handleRemove = () => {
		dispatch(actions.indexActions.removeTask(store.user.id, id))
	}

	useEffect(() => {
		dispatch(actions.indexActions.modifyTask(task.timeblock_id, task.id, task))
	}, [task])

	useLayoutEffect(() => {
		if (task.status === "Completed") return setStatusColor('green')
		if (task.status === "In Progress") return setStatusColor('yellow')
		if (task.status === "Not Completed") return setStatusColor('red')
	}, [handleChange, handleRemove])

	return (
		<Row id="Task" align="middle">
			<Col sm={6} xs={24}>
				<div style={{ marginRight: '10px' }} className={`ui empty circular label ${statusColor}`} />
				<div className="ui buttons">
					<select name="status" value={task.status} className={`ui floating dropdown button`} onChange={handleChange}>
						<option value="Completed">Completed</option>
						<option value="In Progress">In Progress</option>
						<option value="Not Completed">Not Completed</option>
					</select>
				</div>
			</Col>
			<Col sm={6} xs={24}>
				<h4>{title}</h4>
			</Col>
			<Col sm={11} xs={23}>
				{description}
			</Col>
			<Col sm={1} xs={1}>
				<i className="trash alternate outline icon" onClick={handleRemove}></i>
			</Col>
		</Row>
	)
})

export default Task
