import React,{useState,useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import './Timer.css'
let intervalId=''
const Timer = () => {
    const [timer, setTimer]=useState(0)
    const [disable, setDisable]=useState(false)
    const startBtn = useRef();
    const stopBtn = useRef();
    const navigate = useNavigate()

    const startTimer=()=>{
        startBtn.current.id='activeStartBtn'
        stopBtn.current.id=''
        setDisable(true)
    intervalId=setInterval(()=>{
            setTimer((oldvalue)=>oldvalue+1)
            },1000);
    }
     
    const stopTimer=()=>{
        startBtn.current.id=''
        stopBtn.current.id='activeStopBtn'
         clearInterval(intervalId);
   setDisable(false)       
    } 
    const resetTimet =()=>{
        startBtn.current.id=''
        stopBtn.current.id=''
   clearInterval(intervalId);
   setTimer(0) 
   setDisable(false)       
    }
    return (
        <>
        <div className="row">
            <button className="btn w-auto" onClick={()=>navigate(-1)}>Go Back</button>
        </div>
         <div className="container">
             <h1 className="text-center display-5 text-muted fw-bold">Timer ......</h1>
         <div className="row justify-content-center">
             <div className="col-lg-3 col-6 text-center p-3 border rounded-3 shadow-sm">
                 <p className="display-1">{timer}</p>
                <div>
                <button className="startBtn" disabled={disable}
                onClick={startTimer} ref={startBtn}>Start</button>
                 <button className="stopBtn" disabled={disable && false} onClick={stopTimer} ref={stopBtn} >Stop</button>
                 <button className="resetBtn" onClick={resetTimet}>Reset</button>
                </div>
             </div>
         </div>
         </div>
        </>
    );
};


export default Timer;

setTimeout(function() {}, 10);