import React,{useEffect,useState} from 'react'
import Navbar from './Components/Navbar'
import {getMatches} from "./api/Api"
import MyCard from './Components/MyCard'
import { Container, Grid} from "@material-ui/core";
import News from './News/News'
import Scheduled from './Components/Scheduled'
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
      <img className="gif" src="kai.gif" alt="gif"/>
      <img className="gif1" src="kai1.gif" alt="gif"/>
      <img className="Brave" src="Brave.gif" alt="gif"/>
      <News/>
      <Scheduled/>
      <Container className="Cont">

        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
      
    </div>
  )
}

export default App
