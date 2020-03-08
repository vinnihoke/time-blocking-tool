import React, { useState } from 'react'

const TableData = () => {

	const [status, setStatus] = useState('Not Completed')

	const handleChange = (e) => {
		setStatus(e.target.value)
	}

	return (
		<tr>
			<td>
				<select name="task-status" value={status} className="ui dropdown" onChange={handleChange}>
					<option value="Completed">Completed</option>
					<option value="In Progress">In Progress</option>
					<option value="Not Completed">Not Completed</option>
				</select>
			</td>
			<td>Test</td>
			<td>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vitae?
		</td>
		</tr>
	)
}

export default TableData
