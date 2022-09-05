import React,{useMemo, useState} from 'react';
import './style.css'
import {Data} from './Data'
const App = () => {
  const [foodData, SetFoodData] = useState(Data)
  const [activeOption, SetActiveOption] = useState({
    "all":"active",
    "Brack Fast":'',
    "Lanch":'',
    "Dinner":'',
    "Evening":''

  })

  const filter =(value)=>{
    if(value === 'all'){
      SetFoodData(Data)
    }
    else{
      const newData = Data.filter((item)=> item.category === value)
    SetFoodData(newData)
    }
    for(let key in activeOption){
      if(key === value){
        SetActiveOption((old)=>{
          return {...old,[key]:'active'}
        })
        console.log(activeOption[key])
      }
      else{
        SetActiveOption((old)=>{
          return {...old,[key]:''}
        })
        console.log(activeOption[key])
      }
      
    }
  }

  return (
    <>
    {/*header*/}
     <header>
          <h2 className="text-muted py-2 text-center border-bottom
            shadow-sm">Order Your Favourite Dish
          </h2>
          <div className="row justify-content-center mt-4">
            <div className="col-10">
              <ul className="menu">
                <li className="menu-option" id={activeOption['all'] } onClick={()=>filter("all")}>All</li>
                <li className="menu-option" id={activeOption['Brack Fast'] } onClick={()=>filter("Brack Fast")} >Brack fast</li>
                <li className="menu-option" id={activeOption["Lanch"] } onClick={()=>filter("Lanch")} >Lanch</li>
                <li className="menu-option" id={activeOption["Evening"] } onClick={()=>filter("Evening")}>Evening</li>
                <li className="menu-option" id={activeOption["Dinner"] } onClick={()=>filter("Dinner")}>Dinner</li>
              </ul>
            </div>
          </div>
         </header>

         {/*Body*/}
     <div className="container">
       <div className="row justify-content-center">
         <div className="col-10 mt-5">
           <div className="row g-4">
            {
              foodData.map((item)=>{
                const {id,title,price,description,sub_description,img_src} = item;
                return(
                        <div className="col-4" key={id}>
                         <div className="box w-auto">
                           <div className="img_box">
                             <img src={img_src}   className="h-100 w-100" alt="Responsive image"/>
                           </div>
                           <div className="d-flex flex-column">
                             <h5 className="title">{title}</h5>
                             <p className="description m-0">
                              {description}
                             </p>
                             <div className="d-flex p-0 mb-2 mt-auto" style={{height:20}}>
                               <p className="price">Price : {price}$</p>
                               <button className="orderBtn">Order Now</button>
                             </div>
                             <p className="description mb-1">
                               {sub_description}
                             </p>
                           </div>
                         </div>
                       </div>
                    )
              })
            }
           </div>
         </div>
       </div>
     </div> 
    </>
  )
}




export default App;
