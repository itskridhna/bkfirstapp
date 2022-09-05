import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutUsPage from './AboutUsPage'
import ContactPage from './ContactPage'
import GallaryPage from './GallaryPage'
import ProjectPage from './ProjectPage'
import ErrorPage from './ErrorPage'
import DynamicUsers from './Dyna_Users'
import UserPage from './UserPage'
import Timer from './Timer/App.js'
import WeatherApp from './WeatherApp/WeatherApp'
import PuzzleApp from './Puzzle_App/PuzzleAppBody'


// Costum CSS  ==============
import './Style.css'

const App =()=>{
	return(
		<>
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<HomePage />} />
				<Route path='/about' element={<AboutUsPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/gallery' element={<GallaryPage />} />
				<Route path='/projects' element={<ProjectPage />} />
				<Route path='/projects/users' element={<DynamicUsers />} />
				<Route path='/projects/users/:name' element={<UserPage />} />
				<Route path='/projects/timer' element={<Timer />} />
				<Route path='/projects/weatherapp' element={<WeatherApp />} />
				<Route path='/projects/puzzleApp' element={<PuzzleApp />} />
				<Route path='*' element={<ErrorPage />} />
			</Route>
		</Routes>
		</>
		);
};
export default App;