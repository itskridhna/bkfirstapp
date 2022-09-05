import React from 'react'
import {useNavigate} from 'react-router-dom'
 const ProjectPage = () =>{
 	const navigate =useNavigate();
	return (
		<>
			<h1 className=" text-center text-secondary my-5">My Creations ......</h1>
			<div className="container">
				<div className="row justify-content-center">
				{
					ProjestsInfo.map((item)=>{
						return(
						       <div key={item['Project No']} 
						       	className="col-lg-3 col-md-4 col-sm-5 col-8 p-2 " 
						       	onClick={()=>navigate(item['url'])}
						       	style={{cursor:"pointer"}}>
						       	<div className="h-100 d-flex flex-column border 
						       		border-info text-center rounded-3 p-2">
						       		<h3>{item['Title']}</h3>
										<p>{item['Subtitle']}</p>
										<button className="btn btn-outline-info btn-sm mt-auto "
											onClick={()=>navigate(item['url'])}>
											Learn More..
										</button>
						       	</div>
								
								</div>
							)
					})
				}
			</div>
			</div>
			
		</>
		)
}


const ProjestsInfo =[
	{
		'Project No':1, 
		'Title':"User Page", 
		'Subtitle':"Show the Users Page...", 
		'url':"/projects/users"
	},
	{
		'Project No':2, 
		'Title':"Timer", 
		'Subtitle':"How to handle Timer...", 
		'url':"/projects/timer" 
	},
	{
		'Project No':3, 
		'Title':"Weather App", 
		'Subtitle':"Check City Weather App", 
		'url':"/projects/weatherapp" 
	},	
	{
		'Project No':4, 
		'Title':"Puzzle App", 
		'Subtitle':" This is a Puzzle App", 
		'url':"/projects/puzzleApp" 
	},
]

export default ProjectPage;