import React from 'react';
import c from './Form.module.css'
import {Field, Formik, Form, ErrorMessage} from "formik";
import {connect} from "react-redux";
import {addNewPost} from "../../redux/postsReducer";
import formValidation from "../../validationSchemes/formValidation";

const MyForm = (props) => {
	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					lastname: '',
					email: '',
					phone: '',
				}}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={(values, {resetForm}) => {
					values.id = Math.random()
					props.addNewPost(values)
					resetForm({values: ''})
				}}
				validationSchema={formValidation}
			>
				{() => (
					<Form className={c.main__form}>
						<div className={c.form__item}>
							<label className={c.label} htmlFor="name">Name</label>
							<br/>
							<Field
								className={c.input}
								type="text"
								tabIndex="1"
								name={'name'}
							/>
							<ErrorMessage name="name" component="div"/>
						</div>
						<div className={c.form__item}>
							<label className={c.label} htmlFor="lastname">Lastname</label>
							<br/>
							<Field
								className={c.input}
								type="text"
								tabIndex="1"
								name={'lastname'}
							/>
							<ErrorMessage name="lastname" component="div"/>
						</div>
						<div className={c.form__item}>
							<label className={c.label} htmlFor="email">E-mail</label>
							<br/>
							<Field
								className={c.input}
								type="text"
								tabIndex="1"
								name={'email'}
							/>
							<ErrorMessage name="email" component="div"/>
						</div>
						<div className={c.form__item}>
							<label className={c.label} htmlFor="phone">Phone number</label>
							<br/>
							<Field
								className={c.input}
								type="tel"
								tabIndex="1"
								name={'phone'}
							/>
							<ErrorMessage name="phone" component="div"/>
						</div>
						<button className={c.form__button} type="submit" tabIndex="1">Send</button>
					</Form>
				)}
			</Formik>
		</div>
		
	)
}

let mapStateToProps = (state) => {
	return {
		posts: state.postsData.posts
	}
}

export default connect(mapStateToProps, {addNewPost})(MyForm);