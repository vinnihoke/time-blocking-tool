import React, { useEffect, useState } from 'react'
import Timeblock from '../components/Timeblock.js'
import axios from 'axios';

const TimeblockList = (darkmode) => {

	const [data, setData] = useState();

	useEffect(() => {
		let call = async () => {
			try {
				let request = await axios.get(`http://localhost:3200/timeblocks/1`)
				setData(request.data)
			} catch (e) {
				console.log(e.message)
			}
		}
		call()
	}, [])

	return (
		<div>
			{data ? data.map((element, index) => {
				return <Timeblock key={index} {...element} darkmode={darkmode} />
			}) : <h4>Loading</h4>
			}
		</div>
	)
}

export default TimeblockList
