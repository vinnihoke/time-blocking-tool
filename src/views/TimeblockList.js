import React, { useEffect, useState } from 'react'
import Timeblock from '../components/layout/Timeblock.js'
import TimeblockForm from '../components/utils/TimeblockForm.js'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import actions from "../actions/index";
import { Drawer } from 'antd'

const TimeblockList = () => {


	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();
	const { userid } = useParams()

	const [drawer, setDrawer] = useState(false)

	const toggleDrawer = () => {
		setDrawer(!drawer)
	}

	useEffect(() => {
		dispatch(actions.indexActions.setTimeblocks(userid))
	}, [dispatch])

	return (
		<section>
			<section className="ui container">
				<div>
					{store.timeblocks ? store.timeblocks.map((timeblock, index) => {
						return <Timeblock key={index} {...timeblock} />
					}) : <h4>Loading</h4>
					}
					{store.timeblocks.length === 0 ? (
						<h4>Add a new time block with button below. 👇</h4>
					) : null}
				</div>

				<Drawer
					placement="right"
					closable={true}
					onClose={toggleDrawer}
					visible={drawer}
					width="425px"
				>
					<h4>Add Timeblock</h4>
					<p>Time blocks are used to dedicate specific windows throughout the day to get deep work done. You'll add tasks to the time block later.</p>
					<p>Didn't finish your day's tasks? Don't sweat it... pick them up the next day and move on to the next time block.</p>
					<TimeblockForm />
				</Drawer>
				<button style={{ position: "fixed", bottom: "30px", right: "30px" }} className="ui animated button green" onClick={toggleDrawer} tabIndex="0">
					<div className="visible content">Add Time Block</div>
					<div className="hidden content">
						<i className="add icon"></i>
					</div>
				</button>
			</section>
		</section>
	)
}

export default TimeblockList
