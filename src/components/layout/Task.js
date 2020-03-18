import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Task = (props) => {
	const { id, timeblock_id, title, description, status, setData } = props

	const handleChange = (e) => {
		// setTask({ ...task, [e.target.name]: e.target.value })
		// axios.put(`${process.env.REACT_APP_BASE_URL}/tasks/${timeblock_id}/${id}`, task)
		// 	// .then(res => setData(res.data))
		// 	.then(res => console.log(res.data))
		// 	.catch(err => console.log(err))
		console.log(e.target.value)
	}

	return (
		<tr>
			<td>
				<div className="ui buttons">
					<select name="status" value={"Not Completed"} className="ui floating dropdown button" onChange={handleChange}>
						<option value="Completed">Completed</option>
						<option value="In Progress">In Progress</option>
						<option value="Not Completed">Not Completed</option>
					</select>
				</div>
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
