import React from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const TimeblockForm = (props) => {

	const { userid } = useParams()
	const { setData } = props

	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Required"),
			description: Yup.string().required("Required")
		}),
		onSubmit: async data => {
			try {
				const timeblocks = await axios.post(`${process.env.REACT_APP_BASE_URL}/timeblocks/${userid}`, data)
				setData(timeblocks.data)
			} catch (e) {
				console.log(e.message)
			}
		}
	})

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
			<Button type='submit'>Add New Timeblock</Button>
		</Form>
	)
}

export default TimeblockForm
