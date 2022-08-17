import {combineReducers, legacy_createStore as createStore} from "redux"
import {postsReducer} from "./postsReducer";

let reducers = combineReducers({
	postsData: postsReducer
})

let store = createStore(reducers)

window.store = store

export default store
