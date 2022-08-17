import React from 'react';
import c from "./History.module.css";

const HistoryItem = (props) => {
	return (
		<div className={c.main__form}>
			<div className={c.form__item}>
				<h3>Name</h3>
				<p className={c.put}>{props.name}</p>
			</div>
			<div className={c.form__item}>
				<h3>Lastname</h3>
				<p className={c.put}>{props.lastname}</p>
			</div>
			<div className={c.form__item}>
				<h3>E-mail</h3>
				<p className={c.put}>{props.email}</p>
			</div>
			<div className={c.form__item}>
				<h3>Phone number</h3>
				<p className={c.put}>{props.phone}</p>
			</div>
			<button onClick={() => {
				props.deletePost(props.id)
			}} className={c.form__button} type="delete-button">Delete</button>
		</div>
	)
}

export default HistoryItem;