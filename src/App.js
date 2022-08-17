import React from 'react'
import Header from "./components/header/Header";
import MyForm from "./components/form/Form";
import History from "./components/history/History";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import c from './App.module.css'

function App() {
	return (
		<div className={c.wrapper}>
			<Header/>
			<div className={c.main}>
				<Routes>
					<Route path={'/'} element={<MyForm/>}>
						<Route path={'form'} element={<MyForm/>}/>
					</Route>
					<Route path={'/history'} element={<History/>}/>
				</Routes>
			</div>
			<Footer/>
		</div>
	)
}

export default App;
