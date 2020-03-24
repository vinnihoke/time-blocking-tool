import React, { useState, useEffect } from 'react'
import Task from './Task.js'
import { Popup } from 'semantic-ui-react'
import dayjs from 'dayjs';
import TaskForm from '../utils/TaskForm.js'
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "antd"
import actions from "../../actions/index.js";


const Timeblock = (props) => {
	const { id, title, start, end, description } = props

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false)

	const toggleDrawer = () => {
		setDrawer(!drawer)
	}

	const handleRemove = () => {
		dispatch(actions.indexActions.removeTimeblock(store.user.id, id))
	}


	useEffect(() => {
		dispatch(actions.indexActions.setTasks(id))
	}, [store.timeblocks, dispatch])


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
							<h4>{`${dayjs.unix(start).format("h:mm a")} - ${dayjs.unix(end).format("h:mm a")}`}</h4>
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
			<Drawer
				placement="right"
				closable={true}
				onClose={toggleDrawer}
				visible={drawer}
				width="425px"
			>
				<h4>Add New Task</h4>
				<TaskForm {...props} />
			</Drawer>
			<button className="ui animated button blue" onClick={toggleDrawer} tabIndex="0">
				<div className="visible content">Add Task</div>
				<div className="hidden content">
					<i className="add icon"></i>
				</div>
			</button>
		</section>
	)
}

export default Timeblock
