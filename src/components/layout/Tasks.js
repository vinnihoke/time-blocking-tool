import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TimeblockData = (props) => {
	const { title, description, status } = props
	const [progress, setProgress] = useState(status)

	const handleChange = (e) => {
		setProgress(e.target.value)
	}

	return (
		<tr>
			<td>
				<div className="ui buttons">
					<select name="task-status" value={progress} className="ui floating dropdown button" onChange={handleChange}>
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

export default TimeblockData
