import React,{useState,useEffect,startTransition} from 'react';
import {PuzzleApp,CheckBox} from './PuzzleApp'
import {ForComputer} from './PuzzleAppDataContainer'
import './PuzzleApp.css'
import AnswerShit from './AnswerShit'

const PuzzleAppBody =() =>{
	const [queNo, setQueNO] = useState(0);
	const [reader, setReader] = useState([]);
	const [curElem, setCurElem] = useState('')
	const [ansIndex, setAnsIndex] = useState([])
	let [answeredList, setAnsweredList] = useState({})
	let [chooseAns, setChooseAns] = useState(false)
	let [submit, setSubmit] = useState(false)
	useEffect(()=>{
		for(let i=0; i<=reader.length; i++){
			if(reader[i]===queNo){
				setChooseAns(true)
				break;
			}
			else{
				setChooseAns(false)
			}
		}
	},[queNo])
	const ForSeen=()=>{
		let indicate=0;
		reader.forEach((value)=>{
			if(value === queNo){
				
				indicate=1;
			}
		})
		if(indicate===0){
			setReader([...reader, queNo])
		}
	}
	
	const Next =(num)=>{
		setQueNO(queNo+num);
		ForSeen();
	}
	const Back =(num)=>{
		setQueNO(queNo-num);
		ForSeen();
	}
	const QuesNavigate =(QuesNo)=>{
		setQueNO(QuesNo)
		ForSeen();
	}
	const Answered = (ans,index)=>{
		let ansNo =`Answer${index}`
		if(index!==ansIndex){
			setAnsIndex(index)
			setAnsweredList({...answeredList,[ansNo]:ans})
		}
		else{
			setAnsweredList({...answeredList,[ansNo]:ans})
		}
	}
	// For Submition ..........................
	const Submition=()=>{
        let sub = 0;
		for(let i=1; i<=10; i++){
			let check = (`Answer${i}` in answeredList)
			if(!check){
				sub=1;
				break
			}

		}
		if(sub===0){
			setSubmit(true)

			}else{
				alert("Please Attend All Questions...")
}
	}

	return (
<>
	{  (submit)? <AnswerShit AnswerList={answeredList} />  :   
	   <div>
	      <div>
			   <p className="display-6 text-center text-info"> Puzzle App</p>
				<hr />
			</div>
			<div className="container  h-100">
				<div className="row  gap-4 justify-content-evenly">
					<div className="col-lg-3 d-flex gap-3   col-md-4 col-sm-8 col-10 p-0 
							border bg-light  rounded-4 container  "
								style={{height:"400px"}}
							>
						<PuzzleApp key = { ForComputer[queNo].id}
							Ques={ ForComputer[queNo].Question}
							Option1={ ForComputer[queNo].A}
							Option2={ ForComputer[queNo].B}
							Option3={ ForComputer[queNo].C}
							Option4={ ForComputer[queNo].D}
							id={ ForComputer[queNo].id}
							Ans={ ForComputer[queNo].Ans}
							Next={Next}
							Back={Back}
							Answered={Answered}
							CheckedQues={curElem}
							ChoosedAns={chooseAns}
							AnsList={answeredList}
						/>
					</div>
					<div className="col-lg-4 col-md-5 col-sm-8 col-10 border  p-2">
						<p className="fs-5 ">List of Remember questions..</p >
						<p>Loernkcv dcvizxjv zxv zxoivjsd zxCkpkdsm xcvkpv cvov  odsv skcvsx</p>
						<div className="row row-cols-4 m-0 px-2  ">
						{
							ForComputer.map((curElem,ind)=>{
								let see="";
								let seen="";
								let active="";
								let checkIcon=(`Answer${ind+1}` in answeredList);

								if(ind===queNo){
									see="See"
									active="Active"
								}
								reader.forEach((value)=>{
										if(value===ind){
											seen="Seen";
									}
								})

							return(
							<CheckBox key = {curElem.id}
									QuestionNo={curElem.id}
									QuesNavigate={QuesNavigate}				
									See={see}
									Seen={seen}
									Active={active}
							        CheckIcon={checkIcon}
								/>
								)}
							)}
						</div>

						<button className="btn text-bg-primary
						 fs-5 fw-bold text-white" onClick={Submition} >Submit
						 <i className="bi bi-arrow-bar-right ms-2"></i></button>
					</div>
				</div>
			</div>
		</div>
	}
</ >
		);
}

export default PuzzleAppBody;