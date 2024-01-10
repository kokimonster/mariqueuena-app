import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';


function LandingPageApp () {
  return (  
    <Navbar className=" justify-content-between"  style={{backgroundColor: "#231099"}}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={require('../img/mrkna.png')}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Marikina Logo"
            />
          </Navbar.Brand>
          <div className='d-inline-block text-center text-light'> 
          <h1 className='text-xl'>MARIQUEUENA</h1>
          <h6>COMELEC MARIKINA</h6>
          </div>
          <Navbar.Brand href="/">
            <img
              src={require('../img/comelec.png')}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Comelec Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
  );
}
export default LandingPageApp