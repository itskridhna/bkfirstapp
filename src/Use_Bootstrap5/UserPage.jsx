import {useParams} from 'react-router-dom';
import {User} from './UsersData'
const UserPage = ()=>{
		const params =useParams();
		const {name}=params
			console.log('name: '+ name)
		

	return(
	       <>
	       {
	       	(name in User)?(
	      <div className="container text-center">
	       		<h3>User {User[name].id}</h3>
	       		<p>Name : <strong>{User[name].name} </strong></p>	       		
	       		<p>Email : <strong>{User[name].email}</strong></p>	       		
	       	</div>):<p className="text-center">
	       		User <strong>{name}</strong> is Not Member...
	       	</p>
	       	 }
	       </>
	       )
}
export default UserPage;