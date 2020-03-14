import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Timeblock from '../components/layout/Timeblock.js'
import TimeblockForm from '../components/utils/TimeblockForm.js'
import { Icon, Sidebar, Segment, Menu } from "semantic-ui-react"
import axios from 'axios';
import { useGlobalContext } from '../context/globalContext.js';

const TimeblockList = () => {

	const [sidebar, setSidebar] = useState(false)
	const [data, setData] = useState();
	const { context } = useGlobalContext();
	console.log(context);
	const { userid } = useParams()

	useEffect(() => {
		let call = async () => {
			try {
				let request = await axios.get(`http://localhost:3200/timeblocks/${userid}`)
				setData(request.data)
			} catch (e) {
				console.log(e.message)
			}
		}
		call()
	}, [])

	return (
		<Sidebar.Pushable>
			<Sidebar as={Menu}
				animation='push'
				icon='labeled'
				direction="right"
				onHide={() => setSidebar(false)}
				vertical
				visible={sidebar}
				width='very wide'
			>
				<div style={{ width: "70%", margin: "0 auto" }}>
					<TimeblockForm setData={setData} />
				</div>
			</Sidebar>
			<Sidebar.Pusher>
				<section>
					{data ? data.map((element, index) => {
						return <Timeblock key={index} {...element} />
					}) : <h4>Loading</h4>
					}
				</section>
				<section className="ui grid">
					<div className="right floated column">
						<div className="ui animated blue button right floated" tabIndex="0" onClick={() => setSidebar(!sidebar)}>
							<div className="visible content">Add new timeblock</div>
							<div className="hidden content">
								<i className="right  plus icon"></i>
							</div>
						</div>
					</div>
				</section>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	)
}

export default TimeblockList
