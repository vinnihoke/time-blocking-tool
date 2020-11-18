import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions/index.js';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';
import TaskForm from '../forms/TaskForm.js';
import Task from './Task.js';
import EditTimeblockForm from '../forms/EditTimeblockForm.js';

export default function Timeblock(props) {
	const { id, title, start, end, description } = props;

	const store = useSelector((state) => state.indexReducer);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false);
	const { width } = useWindowDimensions();

	const toggleDrawer = () => {
		setDrawer(!drawer);
		if (store.editing === true) {
			dispatch(actions.indexActions.toggleEdit(false));
		}
		dispatch(actions.indexActions.resetTimeblockForm());
	};

	const toggleEdit = () => {
		dispatch(actions.indexActions.toggleEdit(true));
		dispatch(actions.indexActions.editTimeblock(props));
		setDrawer(!drawer);
	};

	const handleRemove = () => {
		dispatch(actions.indexActions.removeTimeblock(store.user.id, id));
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		// const modified = arrayMove(store.tasks, oldIndex, newIndex);
		// dispatch(actions.indexActions.reorderTasks(modified));
	};

	useEffect(() => {
		dispatch(actions.indexActions.setTasks(id));
	}, [store.timeblocks]);

	return (
		<section id="Timeblock">
			<div justify="end">
				<div span={22}>
					<div content={description} trigger={<h3>{title}</h3>} />
				</div>
				<div span={1}>
					<i className="ui icon edit" onClick={toggleEdit} />
				</div>
				<div span={1}>
					<div
						trigger={
							<i className="trash alternate outline icon red" />
						}
						content={
							<button
								className="ui button red"
								onClick={handleRemove}
							>
								Delete this time block?
							</button>
						}
						on="click"
						position="top right"
					/>
				</div>
			</div>
			<div>
				<div>
					<h4>{`${dayjs.unix(start).format('h:mm a')} - ${dayjs
						.unix(end)
						.format('h:mm a')}`}</h4>
				</div>
			</div>
			<div
				axis="y"
				pressDelay={200}
				onSortEnd={onSortEnd}
				onSortStart={(_, event) => event.preventDefault()}
			>
				{store.tasks ? (
					store.tasks.map((task, index) => {
						if (task.timeblock_id === id) {
							return (
								<div
									index={index}
									key={task.id * Math.random()}
									task={task}
								/>
							);
						}
					})
				) : (
					<tr>
						<td>
							<h4>Loading</h4>
						</td>
					</tr>
				)}
			</div>
			{width < 600 ? (
				<div
					placement="bottom"
					closable
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
				</div>
			) : (
				<div
					placement="right"
					closable
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
				</div>
			)}
			<div justify="end">
				<button
					type="button"
					className="ui animated button blue"
					onClick={toggleDrawer}
					tabIndex="0"
				>
					<div className="visible content">Add Task</div>
					<div className="hidden content">
						<i className="add icon" />
					</div>
				</button>
			</div>
		</section>
	);
}
