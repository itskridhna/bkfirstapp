import React,{useState,useEffect} from 'react';

const PuzzleApp =(Data)=>{
	const [nextBtn, setNextBtn] = useState({visibility:"visible"})
	const [backBtn, setBackBtn] = useState({visibility:"visible"})
	const [index, setIndex] = useState(0)
	useEffect(()=>{
		(Data.id === 10)?setNextBtn({visibility:"hidden"}):setNextBtn({visibility:"visible"});
		(Data.id ===1)?setBackBtn({visibility:"hidden"}):setBackBtn({visibility:"visible"});
		if(Data.ChoosedAns){
			let ansNo =`Answer${Data.id}`
      		let optionLis = ['A','B','C','D']
			 optionLis.map((e)=>{
			 	let Addselect =document.getElementById(e)
			 	if(Data.AnsList[ansNo]===e){
			 		Addselect.classList.add("select")
			 		console.log(Data.AnsList[ansNo])

			 	}
			 	else{
			 		Addselect.classList.remove("select")
			 	}
      			})
				}
	},[Data])

	const goNext = (num)=>{
		Data.Next(num)
	}
	const goBack = (num)=>{
		Data.Back(num)
	}

	const ChooseAnswer=(value)=>{
      Data.Answered(value,Data.id)
      let optionLis = ['A','B','C','D']
	 optionLis.map((e)=>{
	 	let Addselect =document.getElementById(e)
	 	if(value===e){
	 		Addselect.classList.add("select")
	 	}
	 	else{
	 		Addselect.classList.remove("select")
	 	}
			})
	}

	return(
		<>
		<div className=" col-12 position-relative" >
		<p className="fs-6  p-2 border-bottom">
			{`${Data.id}. ${Data.Ques}`}
		</p>
		<ul
			className="list-group list-group-numbered  list-style-none  gap-3    opition_list"
		>
			<li
				className="list-group-item py-1  w-75 fw-normal fs-6 corsur-pointer  border rounded-pill mx-auto"
				id='A'
				onClick={()=>ChooseAnswer('A')}
			>
				{Data.Option1}
			</li>
			<li
				className="list-group-item py-1  w-75 fw-normal fs-6 corsur-pointer  border rounded-pill mx-auto"
				id='B'
				onClick={()=>ChooseAnswer('B')}
			>
				{Data.Option2}
			</li>
			<li
				className="list-group-item py-1  w-75 fw-normal fs-6 corsur-pointer  border rounded-pill mx-auto"
				id='C'
				onClick={()=>ChooseAnswer('C')}
			>
				{Data.Option3}
			</li>
			<li
				className="list-group-item py-1  w-75 fw-normal fs-6 corsur-pointer  border rounded-pill mx-auto"
				id='D'
				onClick={()=>ChooseAnswer('D')}
			>
				{Data.Option4}
			</li>
			
		</ul>
		<div className=" d-flex p-3 bottom-0 position-absolute w-100" >
			<span className="fs-5  px-3  rounded-pill  me-auto backBtn"
			onClick={()=>goBack(1)} style={backBtn}
			><i className="bi bi-arrow-left me-1"></i>Back </span >
			<span className="fs-5  px-3 rounded-pill  nextBtn  "
			onClick={()=>goNext(1)} style={nextBtn}>Next
			<i className="bi bi-arrow-right ms-1"></i>
			</span >
		</div>

		
		</div>
	</>
		)
}

const CheckBox =(Data)=>{
		const [noOfQues, setNoOfQues] = useState([])
		const navigate=(quesNo)=>{
		Data.QuesNavigate(quesNo-1)
	}
	return(
		<>
			
					<div className={`col text-center pb-4 ${Data.Active} ${Data.See || Data.Seen} for_unActive`} style={{cursor:"pointer"}}>
						<p className="position-relative border fw-normal  pb-3 px-1 m-0  rounded-3" style={{fontSize:18,}}
						 onClick={()=>navigate(Data.QuestionNo)}  >
						{Data.QuestionNo}
						   
				<small className="badge position-absolute
				rounded-pill   p-1 px-2 font-monospace"
				 style={{fontSize:10 ,top:"83%", left:"50%", transform:"translate(-50%,-50%)"}}
				  disabled>{Data.Seen || (Data.See || "Unseen")}</small>
				 {
				 	(Data.CheckIcon )? <i className="bi bi-check-circle
				 	 position-absolute top-0 start-100 translate-middle
				 	 text-success"></i>:null
				 	}
				</p>
				</div>
		</>
		);
}

export {CheckBox,PuzzleApp};