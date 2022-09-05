import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'

const Header =()=>{
	return(<>
		<NavBar />
			<Outlet />
	{/*	<Footer />*/}
		</>);
};

const Footer =()=>{
	return(
	       <>
	       		<p className="text-center py-4 text-bg-light">This is Footer ......</p>
	       </>
	       )
}

export default Header;