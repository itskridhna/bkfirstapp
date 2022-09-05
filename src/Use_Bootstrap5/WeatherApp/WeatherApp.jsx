import React, { useEffect, useState } from 'react';
import './weather.css'

const WeatherApp = () => {
	const [weatherData, setWeatherData] = useState([])
	const [searchCity, setSearchCity] = useState('')
	const [notFoundCity, setNotFoundCity] = useState('')
	const [showWeatherBox, setShowWeatherBox] = useState(true)

	const [dates, setDates] = useState({
		day:'',
		month:'',
		date:'',
		hour:'',
		minute:'',
		period:''
	})
	useEffect(()=>{
		const callApi = async()=>{
			let weatherApi =await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=276cd1474f9f8039108a27ced6141821")
			let appData = await weatherApi.json()
			setWeatherData(()=>[appData])
		}
		//for Dates........
		const currentDate = new Date()

		//For day
		const day_arr=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SUT" ];
		const day = day_arr[currentDate.getDay()];

		//For Month
		const month_arr=["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL","AUG", "SEP","OCT","NUV", "DEC" ]
		const month = month_arr[currentDate.getMonth()]		

		//For Date
		const date = currentDate.getDate();
		//for Houre
		let hour = currentDate.getHours();
		//Form Minute 
		let minute = currentDate.getMinutes();
		//For Period 
		let period = "PM"
		if(hour>11){
			period = "AM"
			hour = hour - 12;
		}
		if(minute<10){
			minute = "0" + minute;
		}

		setDates({...dates, 
					day:day,
					date:date,
					month:month,
					hour:hour,
					minute:minute,
					period:period,
				})
		callApi()
	},[])

	const getSearch = (event)=>{
		event.preventDefault()
		if(searchCity){
			let apiAddr = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=276cd1474f9f8039108a27ced6141821`;
			const getWeather = async()=>{
				let weatherApi =await fetch(apiAddr)				
				let appData = await weatherApi.json()
				if(appData.cod === 200){
					setShowWeatherBox(true)
				setWeatherData(()=>[appData])
				}
				else{
					setNotFoundCity(searchCity)
					setShowWeatherBox(false)
					setWeatherData(()=>appData)
				}

			}
		//for Dates	
		const currentDate = new Date()
			
		//for Houre
		let hour = currentDate.getHours();
		//Form Minute 
		let minute = currentDate.getMinutes();
		//For Period 
		let period = "PM"
		if(hour>11){
			period = "AM"
			hour = hour - 12;
		}
		if(minute<10){
			minute = "0" + minute;
		}

		setDates({...dates, 
					hour:hour,
					minute:minute,
					period:period,
				})
			getWeather();
		}
	}
    return (
        <>
        	<div className="container">
        		<div className="row justify-content-evenly align-items-center gy-4" style={{height:550}}>
        			<div className="col-6 col-sm-6 col-md-5 
        				       			col-lg-3 px-3 py-5 text-center search_box" >
        				<form action="" onSubmit={getSearch}>
        					<h3 className="text-centerer mb-5 mt-2">Search Here..</h3>
        					<p className=" fw-semibold fs-6 m-0 ">Enter City Name</p>
        					<input type="text" className="my-2 search_field" 
        						placeholder="Like : delhi" value={searchCity}
        						onChange={(e)=>setSearchCity(e.target.value)} />
	        				<button className="search_btn " type = "submit">Search
        				   	</button>
        				</form>
        			</div>

        			{ (showWeatherBox)?weatherData.map((val , ind)=>{ 
        				return( 
        				       <div className="col-7 col-sm-6 col-md-5 
        				       			col-lg-3 box overflow-hidden" key={ind}>
        				        	<div className="icon_box" id="weatherStatus">
        				        		<p className="fs-5 fw-semibold m-0"style={{color:"#4b267c"}} >{val.weather[0].description}</p>
        				         		<div className="h-50 d-flex justify-content-center align-items-center">
        				         			{
        				         			(val.weather[0].main == "Rain" )? 
        				         			 <i className="bi bi-cloud-drizzle-fill weatherIcon" style={{color:"white"}}></i>:
       				         		    (val.weather[0].main == "Clouds" )?<i className="bi bi-clouds-fill weatherIcon"
        				         		    style={{color: "white"}}>
       				         		    </i> :<i className="bi bi-brightness-high-fill weatherIcon" style={{color:"#dbe397"}}></i>
        				         		}
        				         		</div>

        				         	</div>
        				         		
        				         	<div className="info_box"> 
        				         		<div className="location ">
        				         			<h3 className="text-center my-0">
        				         				<i className="bi bi-geo-alt-fill locationIcon"></i>
        				         				{val.name}, {val.sys.country}</h3>
        				         			<p className="small text-center " id="date">
        				         			{dates.day} | {dates.month} {dates.date} | {dates.hour}:{dates.minute} {dates.period}</p>
        				         		</div> 
        				         		<div className="temparatur">
        				         			<h3 className="text-center my-0">
        				         				{val.main.temp} &deg;C</h3>
        				         			<p className="small text-center py-0 my-0">
        				         				Max : {val.main.temp_max} &deg;C </p>
        				         			<p className="small text-center pt-0 my-0">
        				         				Min : {val.main.temp_min}&deg;C </p>
        				         		</div>
        				         	</div>
        				         </div>
        				       )}
        				):
        				<div className="col-sm-6 col-md-5 
        				       			col-lg-5 overflow-hidden">
	        				<h1 className="text-center">City : <em className="text-danger
	        						 text-italic">{notFoundCity}</em> </h1>
	        				<h1 className="text-center">" {weatherData.message} "</h1>
        				</div>
        			}
        		</div>
        	</div>
        </>
    );
};

export default WeatherApp;
