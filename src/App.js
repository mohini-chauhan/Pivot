
import './App.css';
import Month from './Components/Month/Month';
import Year from './Components/Year/Year';

import {useState , useEffect} from "react";


function App() {
  const [toggle,setToggle]=useState(true);
  const [data,setData]=useState({})


  // Fetch Function   
  function getdata(){
    fetch("./data.json").then(
      function(res){
      return res.json()
    }).then(function(result){
    // store Data in State Data Variable
      setData(result)
      console.log(result)
    }).catch(
      function(err){
        console.log(err, ' error')
      }
    )
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
    <div className="App">
      <div className="banner-container">
        <section className="btn-container">
          <button  onClick={()=>setToggle(true)}className={toggle?"year-btn clk":"year-btn"}>Yearly Courses</button>
          <button onClick={()=>setToggle(false)} className={toggle?"monthly-btn" :"year-btn clk"}>Monthly Courses</button>
        </section>
        {toggle?<Year/>:<Month text={data[0].monthly}/>}
      </div>
      
    </div>
  );
}

export default App;
