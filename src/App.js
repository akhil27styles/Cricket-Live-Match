import React,{useEffect,useState} from 'react'
import Navbar from './Components/Navbar'
import {getMatches} from "./api/Api"
import MyCard from './Components/MyCard'
import './App.css';
const App = () => {

const [matches, setmatches] = useState([]);
  useEffect(() => {
    getMatches().then((data)=>setmatches(data.matches))
      .catch((error)=>console.log("ERROR:",error));
  }, []);
  return (
    <div>
      <Navbar/>
      <h2> Cricket Live Match Updates <span class="material-icons icon">sports_cricket</span></h2>
     {
       matches.map((match)=>(
         <MyCard match="match"/>
       ))
     }
    </div>
  )
}

export default App
