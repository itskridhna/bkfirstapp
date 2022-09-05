import React,{useState,useRef} from 'react';
import {ForComputer} from './PuzzleAppDataContainer'

const AnswerShit = (ansList)=>{
return (
<>
	<h1 className="display-5 text-center text-primary">Answer List....</h1>
	<hr className="mx-auto w-50  text-primary" />
	<div className="container  py-5">
		<div className="row gy-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
			{
				ForComputer.map((elem,ind)=>{
				let userAns=''
				if(`Answer${ind+1}` in ansList.AnswerList){
					userAns=ansList.AnswerList[`Answer${ind+1}`]
					if(userAns===elem.Ans){
						let rightAns = document.getElementById(`${userAns}${ind}`)
						 rightAns.classList.add("rightAns")
						let rightIocn =document.createElement('i').className='bi bi-check-circle' 
						 rightAns.appendChild(rightIocn)
					}else{
						let wrongAns = document.getElementById(`${userAns}${ind}`)
						wrongAns.classList.add("wrongAns")
						
					}
				}

				return(<div className="col" key={ind}>
				<div className=" card border-0 " >
					<div className="card text-dark bg-light">
					  <div className="card-header pb-1">
					    <p><span className="px-2">{elem.id}.</span>{elem.Question}</p>
					  </div>
					  <div className="card-body bg-white p-2">
					    
					    <ul className="list-unstyled  card-text ">
					      <li className="border rounded-pill fs-6 
					      p-1 px-2 d-inline-block text-align-start my-2" id={`A${ind}`} style={{width:"47%"}} ><span className="px-2">1.</span>{elem.A}</li>
					      <li className="border rounded-pill fs-6 
					      p-1 px-2  d-inline-block my-2" id={`B${ind}`} style={{width:"47%",marginLeft:"5%"}}><span className="px-2">2.</span>{elem.B}</li>
					      <li className="border rounded-pill fs-6 
					      p-1 px-2 d-inline-block text-align-start my-2" id={`C${ind}`} style={{width:"47%"}}><span className="px-2">3.</span>{elem.C}</li>
					      <li className="border rounded-pill fs-6 
					      p-1 px-2 d-inline-block text-align-start my-2" id={`D${ind}`} style={{width:"47%",marginLeft:"5%"}}><span className="px-2">4.</span>{elem.D}</li>
					   
					        
					    </ul>

					  </div>
					  <div className="card-footer text-muted">
					    <p>Currect Answer is : {elem.Ans}</p>
					    <p>Condidate Answer is : {userAns}</p>
					  </div>
					</div>
				</div>
			</div>
			)})}
		</div>
	</div>
</>
)
}
export default AnswerShit;