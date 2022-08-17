const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const DELETE_ALL_POSTS = 'DELETE_ALL_POSTS'

const initialState = {
	posts: [],
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: action.id,
				name: action.name,
				lastname: action.lastname,
				email: action.email,
				phone: action.phone
			}
			return {
				...state,
				posts: [...state.posts, newPost]
			}
		case DELETE_POST:
			return {
				...state,
				posts: [...state.posts.filter(post => post.id !== action.id)]
			}
		case DELETE_ALL_POSTS:
			return {
				...state,
				...initialState
			}
		default:
			return state
	}
}

const addNewPost = ({...postInfo}) => {
	return {
		type: ADD_POST,
		id: postInfo.id,
		name: postInfo.name,
		lastname: postInfo.lastname,
		email: postInfo.email,
		phone: postInfo.phone
	}
}
const deletePost = (id) => {
	return {
		type: DELETE_POST,
		id: id
	}
}
const deleteAllPosts = () => {
	return {
		type: DELETE_ALL_POSTS
	}
}

export {postsReducer, addNewPost, deletePost, deleteAllPosts}