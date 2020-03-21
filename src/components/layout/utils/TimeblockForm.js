import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../actions/index.js';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const TimeblockForm = () => {

	const store = useSelector(state => state.indexReducer);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Required"),
			description: Yup.string().required("Required")
		}),
		onSubmit: (data, { resetForm }) => {
			dispatch(actions.indexActions.addTimeblock(store.user.id, data))
			resetForm()
		}
	})

	return (
		<Form style={{ padding: "40px", margin: "40px 0px", background: "whitesmoke" }} onSubmit={formik.handleSubmit}>
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
