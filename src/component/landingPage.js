import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function LandingPageApp() {
  const navigate = useNavigate();

  const handleCardClick = (action) => {
    switch(action) {
      case 'joinQueue':
        navigate('/queuePage');
        break;
      case 'latestNews':
        //handle news action
        break;
      case 'candidatesProfile':
        navigate('/candidatesProfile');
        break;
      case 'tipsAndTricks':
        navigate('/tipsAndTricks')
        break;
        default:
          break;
    }
  };

  return(
    <div className="landingPageStyle">
      <div className="gradient-bg-landing">
        <Navbar className=" justify-content-between mb-0"  style={{backgroundColor: "#231099"}} sticky='top'>
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
        <div>
            <h1 className="mb-4" style={{textAlign: 'center', color: 'black', backgroundColor: 'rgb(255,255,255,0.59)', padding: '20px'}}>
                MABUHAY! WELCOME TO MARIQUEUENA
            </h1>
          </div>
        <Container className="d-flex align-items-center justify-content-center mt-4">
        <Row>
          <Col>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }} onClick={() => handleCardClick('joinQueue')}>
              <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title>Join Queue</Card.Title>
              </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }} onClick={() => handleCardClick('latestNews')}>
              <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title>Find out the latest news</Card.Title>
              </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }} onClick={() => handleCardClick('candidatesProfile')}>
              <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title>Candidates Profile</Card.Title>
              </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }} onClick={() => handleCardClick('tipsAndTricks')}>
              <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title>Tips and Tricks</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
  
}

export default LandingPageApp;