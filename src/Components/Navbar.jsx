import React,{useState} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Nav.css'
const Navbar = () => {
    return (
      <Jumbotron fluid className="jumbo">
      <Container>
      <h2 style={{color:"white",fontFamily: " 'Days One', sans-serif",fontSize: "100px"}}> Cricket Updates <span class="material-icons icon" style={{fontSize: "100px"}}>sports_cricket</span></h2>
      </Container>
    </Jumbotron>
  );
}
       

export default Navbar
