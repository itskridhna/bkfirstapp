import React from 'react'

const GallaryPage = () =>{
	return (
		<>	
			<div className="container">
				<div className="row justify-content-center">
				 <div className="col-8 border-bottom border-info text-center">
				 	<h1 className="display-4 text-info">My Gallary</h1>
				 </div>
				</div>
			 </div>
			 <div className="container py-4">
			 	<div className="row justify-content-center ">
			 		<div className="col-12 col-lg-10 col-md-12 col-sm-12  row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 ">
			 			{ ImagesContainer.map((element)=>{
			 				return(
			 					<div className="col text-center my-3 ">
			 						<img src={element.imgsrc} alt="" width={220} height={210} className="rounded-2 "/>
			 				   </div>
			 					)
			 			})
			 				
			 			}
			 		</div>
			 		
			 	</div>
			 </div>
			
		</>
		)
}


const ImagesContainer = [
	{
		imgsrc :"./Image/comp2.jpg"
	},
	{
		imgsrc :"./Image/comp1.jpg"
	},
	{
		imgsrc :"./Image/comp3.jpg"
	},
	{
		imgsrc :"./Image/comp4.jpg"
	},
	{
		imgsrc :"./Image/comp5.jpg"
	},
	{
		imgsrc :"./Image/comp6.jpg"
	},
	{
		imgsrc :"./Image/comp7.jpg"
	},
	{
		imgsrc :"./Image/img1.jpg"
	},
	{
		imgsrc :"./Image/man1.jpg"
	},
	{
		imgsrc :"./Image/man2.jpg"
	},
	{
		imgsrc :"./Image/man3.jpg"
	},
	{
		imgsrc :"./Image/man4.jpg"
	},
	{
		imgsrc :"./Image/man5.jpg"
	},
	{
		imgsrc :"./Image/man6.jpg"
	},
]

export default GallaryPage;