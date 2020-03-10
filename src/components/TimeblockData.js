import React, { useState } from 'react'

const TimeblockData = () => {

	const [status, setStatus] = useState('Not Completed')

	const handleChange = (e) => {
		setStatus(e.target.value)
	}

	return (
		<tr>
			<td>
				<div className="ui buttons">
					<select name="task-status" value={status} className="ui floating dropdown button" onChange={handleChange}>
						<option value="Completed">Completed</option>
						<option value="In Progress">In Progress</option>
						<option value="Not Completed">Not Completed</option>
					</select>
				</div>
			</td>
			<td>
				<h4>Testing testing</h4>
			</td>
			<td>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vitae?
			</td>
		</tr>
	)
}

export default TimeblockData
