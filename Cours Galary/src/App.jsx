import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Title from "./component/Title";
import {apiUrl} from "./data"
function App() {
  
  const[course,setcourse]=useState([])
  const[loading,setloading]=useState(true);
  async function fatchdata(){
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      setcourse(output);
      setloading(false)
    }
    catch{
      console.log("Error in Api");
    }
  }
  useEffect(()=>{
    fatchdata();
  },[])

  const[catagarey,setcatagarey ]=useState("All")
  function catagareyhandlar(ev){
    setloading(true)
    setcatagarey(ev.target.innerHTML);
    setloading(false);
  }


  return (
    <div className="w-[100%] h-[100%]  flex  flex-col  items-center ">
      <div className="py-2 mx-auto w-[100%]  bg-blue-900">
        <h1 className="text-center text-[30px] text-white">Top Course</h1>
      </div>
      <div className="py-1 mx-auto w-[100%] flex justify-center bg-blue-500 ">
        <Title catagareyhandlar={catagareyhandlar}/>
      </div>
      {
        (loading)? 
        (
          <div className="spinner-container absolute top-48 ">
      <div className="loading-spinner">
      </div>
              </div>
        ):
        (
        <Card course={course} catagarey={catagarey}/>
      )
      }
      
    </div>
  );
}

export default App;
