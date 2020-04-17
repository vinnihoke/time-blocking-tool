import React, { useState, useEffect } from 'react'
import Task from './Task.js'
import { Popup, Button } from 'semantic-ui-react'
import dayjs from 'dayjs';
import TaskForm from '../utils/TaskForm.js'
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Row, Col } from "antd"
import actions from "../../actions/index.js";
import useWindowDimensions from '../../hooks/useWindowDimensions.js'
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move'
import EditTimeblockForm from '../utils/EditTimeblockForm.js';

const Sortable = SortableContainer(({ children }) => <div className="task-container">{children}</div>);
const SortableTask = SortableElement(({ task }) => <Task key={task} {...task} />)


const Timeblock = (props) => {
	const { id, title, start, end, description } = props

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false)
	const { width } = useWindowDimensions()

	const toggleDrawer = () => {
		setDrawer(!drawer)
		if (store.editing === true) {
			dispatch(actions.indexActions.toggleEdit(false))
		}
		dispatch(actions.indexActions.resetTimeblockForm())
	}

	const toggleEdit = () => {
		dispatch(actions.indexActions.toggleEdit(true))
		dispatch(actions.indexActions.editTimeblock(props))
		setDrawer(!drawer)

	}

	const handleRemove = () => {
		dispatch(actions.indexActions.removeTimeblock(store.user.id, id))
	}


	const onSortEnd = ({ oldIndex, newIndex }) => {
		let modified = arrayMove(store.tasks, oldIndex, newIndex)
		dispatch(actions.indexActions.reorderTasks(modified))
	}

	useEffect(() => {
		dispatch(actions.indexActions.setTasks(id))
	}, [store.timeblocks])



	return (
		<section id="Timeblock">
			<Row justify="end">
				<Col span={22}>
					<Popup content={description} trigger={<h3>{title}</h3>} />
				</Col>
				<Col span={1}>
					<i className="ui icon edit" onClick={toggleEdit}></i>
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
			<Sortable axis="y" pressDelay={200} onSortEnd={onSortEnd} onSortStart={(_, event) => event.preventDefault()}>
				{store.tasks ? store.tasks.map((task, index) => {
					if (task.timeblock_id === id) {
						return <SortableTask index={index} key={task.id * Math.random()} task={task} />
					}
				}) : <tr><td><h4>Loading</h4></td></tr>}
			</Sortable>
			{width < 600 ? (
				<Drawer
					placement="bottom"
					closable={true}
					onClose={toggleDrawer}
					visible={drawer}
					height="85vh"
				>
					{store.editing === true ? (
						<div>
							<h4>Edit Timeblock</h4>
							<EditTimeblockForm />
						</div>
					) : (
							<div>
								<h4>Add New Task</h4>
								<TaskForm {...props} />
							</div>
						)}
				</Drawer>
			) : (
					<Drawer
						placement="right"
						closable={true}
						onClose={toggleDrawer}
						visible={drawer}
						width="40%"
					>
						{store.editing === true ? (
							<div>
								<h4>Edit Timeblock</h4>
								<EditTimeblockForm />
							</div>
						) : (
								<div>
									<h4>Add New Task</h4>
									<TaskForm {...props} />
								</div>
							)}
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
