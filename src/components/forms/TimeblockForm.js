import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import actions from '../../redux/actions/index.js';

dayjs.extend(advancedFormat);

export default function TimeblockForm() {
	const store = useSelector((state) => state.indexReducer);
	const dispatch = useDispatch();
	const [window, setWindow] = useState({
		start: new Date(),
		end: new Date(),
	});

	const formik = useFormik({
		initialValues: { ...store.timeblockForm },
		validationSchema: Yup.object({
			title: Yup.string().required('Required'),
			description: Yup.string(),
		}),
		onSubmit: (data, { resetForm }) => {
			data.start = dayjs(window.start).unix();
			data.end = dayjs(window.end).unix();
			dispatch(actions.indexActions.addTimeblock(store.user.id, data));
			resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<fieldset>
				<label htmlFor="title">Title</label>
				<input name="title" {...formik.getFieldProps('title')} />
				{formik.touched.title && formik.errors.title ? (
					<div className="has-text-danger">{formik.errors.title}</div>
				) : null}
			</fieldset>
			<fieldset>
				<label htmlFor="description">Description</label>
				<input
					name="description"
					{...formik.getFieldProps('description')}
				/>
				{formik.touched.description && formik.errors.description ? (
					<div className="has-text-danger">
						{formik.errors.description}
					</div>
				) : null}
			</fieldset>
			<fieldset>
				<label>Start Time</label>
				<DatePicker
					selected={window.start}
					onChange={(time) => setWindow({ ...window, start: time })}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption="Start"
					dateFormat="hh:mm aa"
				/>
			</fieldset>
			<fieldset>
				<label>End Time</label>
				<DatePicker
					selected={window.end}
					onChange={(time) => setWindow({ ...window, end: time })}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption="End"
					dateFormat="hh:mm aa"
				/>
			</fieldset>
			<button type="submit">Add New Timeblock</button>
		</form>
	);
}
