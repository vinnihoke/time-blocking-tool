import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions/index.js';

export default function TaskForm(props) {
	const { id } = props;
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			status: 'Not Completed',
		},
		validationSchema: Yup.object({
			title: Yup.string().required('Required'),
		}),
		onSubmit: (data, { resetForm }) => {
			dispatch(actions.indexActions.addTask(id, data));
			resetForm();
		},
	});

	return (
		<form
			style={{ margin: '30px 0px', padding: '10px' }}
			onSubmit={formik.handleSubmit}
		>
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
			<button type="submit">Add Task</button>
		</form>
	);
}
