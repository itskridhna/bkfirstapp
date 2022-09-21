import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar= ()=>{
	return(
		<>
		  <nav className="navbar navbar-expand-lg navbar-expand-md navbar-body border-bottom shadow-sm ">
		  <div className="container-fluid">
		    <h2 className="navbar-brand text-center" href="#">
		    	<span>BK</span><span style={{color:"skyblue"}}>LODHI</span>
		    </h2>
		    <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon "></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
		        <li className="nav-item">
		          <NavLink className="nav-link  text-dark " aria-current="page" to="/"><i className='bi bi-house me-1'></i>Home</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink className="nav-link  text-dark" to="/about"><i className="bi bi-card-text"></i> About Us</NavLink>
		        </li>
		         <li className="nav-item">
		          <NavLink className="nav-link  text-dark" to="/contact"><i className="bi bi-person-lines-fill"></i> Contact</NavLink>
		        </li>
		         <li className="nav-item">
		          <NavLink className="nav-link  text-dark" to="/gallery"><i className="bi bi-images"></i> Gallery</NavLink>
		        </li>
		         <li className="nav-item">
		          <NavLink className="nav-link  text-dark " to="/projects"><i className="bi bi-code-slash"></i> Project</NavLink>
		        </li>
		      </ul>
		     
		    </div>
		  </div>
		</nav>
		</>
		)
};
export default NavBar;