import React from 'react'
import TableData from './TableData'

const Table = ({ title, timeframe }) => {
	return (
		<table className="ui small striped table">
			<thead>
				<tr>
					<th colspan="3">
						<h3>{title}</h3>
					</th>
				</tr>
				<tr>
					<th colspan="3">
						<h4>{timeframe}</h4>
					</th>
				</tr>
			</thead>
			<tbody>
				<TableData />
				<TableData />
				<TableData />
				<TableData />
			</tbody>
		</table>
	)
}

export default Table
