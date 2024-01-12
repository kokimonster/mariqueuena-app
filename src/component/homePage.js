import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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

  return(
    <div className= 'containerStyle'>
      <header className="App-header">
          <Container>
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
