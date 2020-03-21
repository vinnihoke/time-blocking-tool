import React, { useEffect, useState } from 'react'
import Timeblock from '../components/layout/Timeblock.js'
import TimeblockForm from '../components/utils/TimeblockForm.js'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import actions from "../actions/index";

const TimeblockList = () => {


	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();
	const { userid } = useParams()

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
						<h4>Add a new timeblock with this form. 👇</h4>
					) : null}
				</div>
				<TimeblockForm />
			</section>
		</section>
	)
}

export default TimeblockList
