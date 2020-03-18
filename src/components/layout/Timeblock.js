import React, { useState, useEffect } from 'react'
import Task from './Task.js'
import { Popup } from 'semantic-ui-react'
import dayjs from 'dayjs';
import { useGlobalContext } from '../../context/globalContext.js';
import TaskForm from '../utils/TaskForm.js'


const Timeblock = (props) => {
	const { id, title, start, end, description, tasks } = props
	const { context, dispatch } = useGlobalContext()

	console.log("props.tasks", tasks)


	// let item = context.timeblocks.find(timeblock => timeblock.id === id)
	// console.log(item.tasks)

	// console.log("timeblock from Timeblock.js :15", timeblock)

	return (
		<section>
			<table className="ui small striped table">
				<thead>
					<tr>
						<th colSpan="3">
							<Popup content={description} trigger={<h3>{title}</h3>} />
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
					{/* {timeblock.tasks ? timeblock.tasks.map((task) => {
						console.log("task.js line :35", task)
						// timeblock.tasks.map((task, index) => {
						// 	return <Task key={index} {...task} />
						// })
					}) : <tr><td><h4>Loading</h4></td></tr>} */}

				</tbody>
			</table>
			<TaskForm {...props} />
		</section>
	)
}

export default Timeblock
