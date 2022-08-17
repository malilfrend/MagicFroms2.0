import React from 'react';
import {connect} from "react-redux";
import c from './History.module.css'
import HistoryItem from "./HistoryItem";
import {deleteAllPosts, deletePost} from "../../redux/postsReducer";


const History = (props) => {
	return (
		<div className={c.posts}>
			<button onClick={() => {
				props.deleteAllPosts()
			}} className={c.delete_btn}>Delete all</button>
			{props.posts.map(post => {
				return (
					<HistoryItem
						{...post}
						key={Date.now() + Math.random()}
						deletePost={props.deletePost}
					/>
				)
			})}
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		posts: state.postsData.posts
	}
}

export default connect(mapStateToProps, {deletePost, deleteAllPosts})(History);