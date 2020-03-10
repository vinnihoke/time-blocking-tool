import React from 'react'
import TimeblockData from './TimeblockData'
import { Popup } from 'semantic-ui-react'

const Table = (props) => {

	console.log("Props from timeblock", props)
	const { id, title, start, end, description } = props

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
						<h4>{`${start} - ${end}`}</h4>
					</th>
				</tr>
			</thead>
			<tbody>
				<TimeblockData />
			</tbody>
		</table>
	)
}

export default Table
