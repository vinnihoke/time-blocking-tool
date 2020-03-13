import React, { useState, useEffect } from 'react'
import Tasks from './Tasks.js'
import { Popup } from 'semantic-ui-react'
import axios from 'axios';
import dayjs from 'dayjs';


const Table = (props) => {
	const { id, title, start, end, description } = props

	const [data, setData] = useState();

	useEffect(() => {
		let call = async () => {
			try {
				let request = await axios.get(`http://localhost:3200/tasks/${id}`)
				setData(request.data)
			} catch (e) {
				console.log(e.message)
			}
		}
		call()
	}, [])


	return (
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
				{data ? data.map((task, index) => {
					return <Tasks key={index} {...task} timeblock={id} />
				}) : <tr><td><h4>Loading</h4></td></tr>}

			</tbody>
		</table>
	)
}

export default Table
