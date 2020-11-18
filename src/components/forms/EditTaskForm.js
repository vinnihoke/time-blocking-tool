import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import actions from '../../actions/index.js';

export default function EditTaskForm(props) {
	const { userid } = useParams();
	const { id, setData } = props;
	const store = useSelector((state) => state.indexReducer);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: store.taskForm,
		validationSchema: Yup.object({
			title: Yup.string().required('Required'),
		}),
		onSubmit: (data, { resetForm }) => {
			dispatch(actions.indexActions.modifyTask(id, data.id, data));
		},
	});

	return (
		<Form
			style={{ margin: '30px 0px', padding: '10px' }}
			onSubmit={formik.handleSubmit}
		>
			<Form.Field>
				<label htmlFor="title">Title</label>
				<input name="title" {...formik.getFieldProps('title')} />
				{formik.touched.title && formik.errors.title ? (
					<div className="has-text-danger">{formik.errors.title}</div>
				) : null}
			</Form.Field>
			<Form.Field>
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
			</Form.Field>
			<Button type="submit">Add Task</Button>
		</Form>
	);
}
