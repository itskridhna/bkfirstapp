import React from 'react'
import {NavLink} from 'react-router-dom'
import UsersData from './UsersData'
 const DynamicUsers = () =>{

	return (
		<>
			<h1 className="display-3 text-center text-info mb-3">Users List</h1>
			<div className="row w-75 mx-auto">
				<div className="table-responsive-xl ">
					<table className="table table-striped table-light table-bordered  table-hover table-lg">
					  <caption>List of users</caption>
					  <thead className="thead-dark">
					    <tr>
					      <th scope="col">id</th>
					      <th scope="col">Name</th>
					      <th scope="col">Eamil Id</th>
					    </tr>
					  </thead>
					  <tbody>
							    {
							    	UsersData.map((item)=>{
							    		return(
							    		       <tr key={item.id}>
		    									      <th scope="row">{item.id}</th>
		    									      <td><NavLink to={`/projects/users/${item.name}`}>{item.name}</NavLink> </td>
		    									      <td>{item.email}</td>
		    									    </tr>
		    							)})
							    	}
							    	
					  </tbody>
					</table>
				</div>
			</div>
		</>
		)
}

export default DynamicUsers;