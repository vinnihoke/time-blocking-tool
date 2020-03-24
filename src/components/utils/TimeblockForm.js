import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../actions/index.js';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

const TimeblockForm = () => {

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();
	const [window, setWindow] = useState({
		start: new Date(),
		end: new Date(),
	});

	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Required"),
			description: Yup.string(),
		}),
		onSubmit: (data, { resetForm }) => {
			data.start = dayjs(window.start).unix();
			data.end = dayjs(window.end).unix();
			dispatch(actions.indexActions.addTimeblock(store.user.id, data))
			console.log("This is the data from formik", data)
			resetForm()
		}
	})

	console.log("This is the window", window)

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Form.Field>
				<label htmlFor="title">Title</label>
				<input name='title' {...formik.getFieldProps('title')} />
				{formik.touched.title && formik.errors.title ? (
					<div className="has-text-danger">{formik.errors.title}</div>
				) : null}
			</Form.Field>
			<Form.Field>
				<label htmlFor="description">Description</label>
				<input name='description' {...formik.getFieldProps('description')} />
				{formik.touched.description && formik.errors.description ? (
					<div className="has-text-danger">{formik.errors.description}</div>
				) : null}
			</Form.Field>
			<Form.Field>
				<label htmlFor="start">Start Time</label>
				<DatePicker
					selected={window.start}
					onChange={time => setWindow({ ...window, start: time })}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption="Start"
					dateFormat="hh:mm aa"

				/>
			</Form.Field>
			<Form.Field>
				<label htmlFor="start">End Time</label>
				<DatePicker
					selected={window.end}
					onChange={time => setWindow({ ...window, end: time })}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption="End"
					dateFormat="hh:mm aa"
				/>
			</Form.Field>
			<Button type='submit'>Add New Timeblock</Button>
		</Form>
	)
}

export default TimeblockForm
