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
        <div style={{height: '100px'}}>
            <h1 className="mb-4" style={{textAlign: 'center', color: 'black', backgroundColor: 'rgb(255,255,255,0.59)', padding: '20px'}}>
                MABUHAY! WELCOME TO MARIQUEUENA
            </h1>
          </div>
        <Container className="d-flex align-items-center justify-content-center mt-5">
        <Row>
          <Col>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              width: '220px',
              height: '100px',
              margin: '0 auto',
              padding: '20px' 
            }} onClick={() => handleCardClick('joinQueue')}>
              <Card.Body className='text-center' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title style={{fontSize: '2em'}}>Join Queue</Card.Title>
              </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              width: '220px',
              height: '100px',
              margin: '0 auto',
              padding: '5px' 
            }} onClick={() => handleCardClick('latestNews')}>
              <Card.Body className='text-center' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title style={{fontSize: '2em'}}>Find out the latest news</Card.Title>
              </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              width: '220px',
              height: '100px',
              margin: '0 auto',
              padding: '8px' 
            }} onClick={() => handleCardClick('candidatesProfile')}>
              <Card.Body className='text-center' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title style={{fontSize: '2em'}}>Candidates Profile</Card.Title>
              </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.57)', 
              color: '#000000', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              width: '220px',
              height: '100px',
              margin: '0 auto',
              padding: '17px'  
            }} onClick={() => handleCardClick('tipsAndTricks')}>
              <Card.Body className='text-center' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                <Card.Title style={{fontSize: '2em'}}>Tips and Tricks</Card.Title>
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