import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";


function AppNavbar(){
  
      return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">mamili ng kapansanan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">pano maging tanga</Nav.Link>
              <Nav.Link href="#link">paano maging nigger</Nav.Link>
              <Nav.Link href="#link">advantages ng pagiging tanga</Nav.Link>
              <Nav.Link href="#link">gago</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          );
  };
  export default AppNavbar