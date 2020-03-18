import React, { useEffect, useState } from 'react'
import Timeblock from '../components/layout/Timeblock.js'
import TimeblockForm from '../components/utils/TimeblockForm.js'
import axios from 'axios';
import { useGlobalContext, setTimeblocks } from '../context/globalContext.js';
import { AxiosWithAuth } from '../helpers/AxiosWithAuth.js';

const TimeblockList = (props) => {

	const [sidebar, setSidebar] = useState(false)
	const { context, dispatch } = useGlobalContext();
	console.log(props)



	useEffect(() => {
		let call = async () => {
			try {
				let request = await AxiosWithAuth().get(`http://localhost:3200/timeblocks/${1}`)
				let timeblocks = [...request.data]
				timeblocks.forEach(async (timeblock) => {
					let tasks = await AxiosWithAuth().get(`http://localhost:3200/tasks/${timeblock.id}`)
					timeblock = { ...timeblock, tasks: tasks.data }
					console.log("timeblock from line 23", timeblock)
				})
				dispatch(setTimeblocks(timeblocks))
			} catch (e) {
				console.log(e.message)
			}
		}
		call()
	}, [dispatch, props])


	console.log("Content Re-loaded")
	console.log("Context.timeblocks", context.timeblocks)

	return (
		<section>
			<section className="ui container">
				<div>
					{context.timeblocks ? context.timeblocks.map((timeblock, index) => {
						console.log("timeblock", timeblock)
						console.log("timeblock.tasks", timeblock.tasks)
						return <Timeblock key={index} {...timeblock} />

					}) : <h4>Loading</h4>
					}
				</div>
				<div className="ui grid">
					<div className="right floated column">
						<div className="ui animated blue button right floated" tabIndex="0" onClick={() => setSidebar(!sidebar)}>
							<div className="visible content">Add new timeblock</div>
							<div className="hidden content">
								<i className="right plus icon"></i>
							</div>
						</div>
					</div>
				</div>
				<TimeblockForm />
			</section>
		</section>
	)
}

export default TimeblockList
