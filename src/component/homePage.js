import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginPage from "./loginPage";
import RegistrationPage from "./registrationPage";

function Homepage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  const [showRegModal, setShowRegModal] = useState(false);
  const handleCloseRegModal = () => setShowRegModal(false);
  const handleShowRegModal = () => setShowRegModal(true);

  const imgStyle = {
    width: '20%',
    height: '20%',
    // marginRight: '40px',
    // marginLeft: '40px',
  };

  return(
    <div className= 'containerStyle'>
      
      <header className="container-fluid">
          <Container className="text-center align-items-center">
          <Row>
            <Col xs={12} md={12} className="center-block pb-3">
                <div>
                  <img class="me-5" variant="top" src={require('../img/mrkna.png')} alt="Marikina Logo" style={imgStyle}  /> 
                  <img class="ms-5" variant="top" src={require('../img/comelec.png')} alt="Comelec Logo" style={imgStyle}  />
                </div>
              
            </Col>
          </Row>
            <Row>
              <h1 as={Col} xs={12} className="text-center">MARIQUEUENA </h1>
            </Row>
            <Row>
              <p as={Col} xs= {12} className="text-center pb-3"> COMELEC MARIKINA </p>
            </Row>
            <Row className="justify-content-center">
              <Col>
                <Button style={{  }} className="m-3" variant="outline-light" size="lg" onClick={handleShowRegModal}>Sign Up</Button>
                <RegistrationPage show={showRegModal} handleClose={handleCloseRegModal}/>
              
                <Button style={{  }} className="m-3" variant="light" size="lg" onClick={handleShowLoginModal} >Login</Button>
                <LoginPage show={showLoginModal} handleClose={handleCloseLoginModal}/>
              </Col>
            </Row>
          </Container>
      </header>
    </div>
  )
}

export default Homepage;
