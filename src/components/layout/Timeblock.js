import React, { useState, useEffect } from 'react'
import Task from './Task.js'
import { Popup, Button } from 'semantic-ui-react'
import dayjs from 'dayjs';
import TaskForm from '../utils/TaskForm.js'
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Row, Col } from "antd"
import actions from "../../actions/index.js";
import { useWindowDimensions } from '../../helpers/useWindowDimensions.js'


const Timeblock = (props) => {
	const { id, title, start, end, description } = props

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false)
	const { width } = useWindowDimensions()

	console.log(width)

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
		<section id="Timeblock">
			<Row justify="end">
				<Col span={23}>
					<Popup content={description} trigger={<h3>{title}</h3>} />
				</Col>
				<Col span={1}>
					<Popup
						trigger={
							<i className="trash alternate outline icon red"></i>
						}
						content={
							<button className="ui button red" onClick={handleRemove}>Delete this time block?</button>
						}
						on='click'
						position='top right'
					/>

				</Col>
			</Row>
			<Row>
				<Col>
					<h4>{`${dayjs.unix(start).format("h:mm a")} - ${dayjs.unix(end).format("h:mm a")}`}</h4>
				</Col>
			</Row>
			<div className="task-container">
				{store.tasks ? store.tasks.map((task, index) => {
					if (task.timeblock_id === id) {
						return <Task key={index} {...task} />
					}
				}) : <tr><td><h4>Loading</h4></td></tr>}
			</div>
			{width < 600 ? (
				<Drawer
					placement="bottom"
					closable={true}
					onClose={toggleDrawer}
					visible={drawer}
					height="85vh"
				>
					<h4>Add New Task</h4>
					<TaskForm {...props} />
				</Drawer>
			) : (
					<Drawer
						placement="right"
						closable={true}
						onClose={toggleDrawer}
						visible={drawer}
						width="40%"
					>
						<h4>Add New Task</h4>
						<TaskForm {...props} />
					</Drawer>
				)}
			<Row justify="end">
				<button className="ui animated button blue" onClick={toggleDrawer} tabIndex="0">
					<div className="visible content">Add Task</div>
					<div className="hidden content">
						<i className="add icon"></i>
					</div>
				</button>
			</Row>
		</section>
	)
}

export default Timeblock
