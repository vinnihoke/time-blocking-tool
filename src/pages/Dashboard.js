import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Timeblock from '../components/layout/Timeblock.js';
import TimeblockForm from '../components/forms/TimeblockForm.js';
import actions from '../redux/actions/index';
import useWindowDimensions from '../hooks/useWindowDimensions.js';

export default function Dashboard() {
	const store = useSelector((state) => state.indexReducer);
	const dispatch = useDispatch();
	const { userid } = useParams();
	const { width } = useWindowDimensions();

	const [drawer, setDrawer] = useState(false);

	const toggleDrawer = () => {
		setDrawer(!drawer);
	};

	useEffect(() => {
		dispatch(actions.indexActions.setTimeblocks(userid));
	}, [dispatch]);

	return (
		<section>
			<section className="ui container" style={{ paddingBottom: '50px' }}>
				<div>
					{store.timeblocks ? (
						store.timeblocks.map((timeblock, index) => (
							<Timeblock key={index} {...timeblock} />
						))
					) : (
						<h4>Loading</h4>
					)}
					{store.timeblocks.length === 0 ? (
						<h4>Add a new time block with button below. 👇</h4>
					) : null}
				</div>

				{width < 600 ? (
					<div
						placement="bottom"
						closable
						onClose={toggleDrawer}
						visible={drawer}
						height="85vh"
					>
						<h4>Add Timeblock</h4>
						<p>
							Time blocks are used to dedicate specific windows
							throughout the day to get deep work done. You'll add
							tasks to the time block later.
						</p>
						<p>
							Didn't finish your day's tasks? Don't sweat it...
							pick them up the next day and move on to the next
							time block.
						</p>
						<TimeblockForm />
					</div>
				) : (
					<div
						placement="right"
						closable
						onClose={toggleDrawer}
						visible={drawer}
						width="40%"
					>
						<h4>Add Timeblock</h4>
						<p>
							Time blocks are used to dedicate specific windows
							throughout the day to get deep work done. You'll add
							tasks to the time block later.
						</p>
						<p>
							Didn't finish your day's tasks? Don't sweat it...
							pick them up the next day and move on to the next
							time block.
						</p>
						<TimeblockForm />
					</div>
				)}

				<button
					type="button"
					style={{ position: 'fixed', bottom: '15px', right: '15px' }}
					className="ui animated button green"
					onClick={toggleDrawer}
					tabIndex="0"
				>
					<div className="visible content">Add Time Block</div>
					<div className="hidden content">
						<i className="add icon" />
					</div>
				</button>
			</section>
		</section>
	);
}
