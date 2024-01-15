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
    width: '50px',
    height: '50px',
    marginRight: '40px',
    marginLeft: '40px',
  };

  return(
    <div className= 'containerStyle'>
      <header className="App-header">
          <Container>
          <Row>
            <Col xs={12} md={6}>
              <Row className="align-items-center">
                <Col>
                  <Image variant="top" src={require('../img/mrkna.png')} alt="Marikina Logo" style={imgStyle}  />
                </Col>
                <Col>
                  <Image variant="top" src={require('../img/comelec.png')} alt="Comelec Logo" style={imgStyle}  />
                </Col>
              </Row>
            </Col>
          </Row>
            <Row>
              <h1 as={Col} xs={12} className="text-center">MARIQUEUENA </h1>
            </Row>
            <Row>
              <p as={Col} xs= {12} className="text-center pb-3"> COMELEC MARIKINA </p>
            </Row>
            <Row>
              <Col>
                <Button style={{ width: '125px', marginRight: '15px'}} variant="outline-light" size="lg" onClick={handleShowRegModal}>Sign Up</Button>
                <RegistrationPage show={showRegModal} handleClose={handleCloseRegModal}/>
              </Col>

              <Col>
                <Button style={{ width: '125px', marginLeft: '15px' }} variant="light" size="lg" onClick={handleShowLoginModal} >Login</Button>
                <LoginPage show={showLoginModal} handleClose={handleCloseLoginModal}/>
              </Col>
            </Row>
          </Container>
      </header>
    </div>
  )
}

export default Homepage;
