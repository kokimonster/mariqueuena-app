import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import CountDownTimer from './CountdownTimer';


function QueuePageApp() {
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState(null);
  const [lastQueue, setLastQueue] = useState(1);
  const [estimatedTime, setEstimatedTime] = useState(3); // Initialize estimatedTime as an integer
  const [showReminder, setShowReminder] = useState(false);
  const location = useLocation();
  const isAdmin = location.state.isAdmin;

  useEffect(() => {
    if (showReminder) {
      Swal.fire({
        title: 'Your waiting time is almost up ',
        icon: 'info',
        text: 'Please prepare all necessary documents.',
        confirmButtonText: 'OK',
      });
      setShowReminder(false);
    }
  }, [showReminder]);

  useEffect(() => {
    joinWaitingLine();
  }, []);

  const calculateEstimatedTime = () => {
    const baseDuration = 3;
    const incrementPerUser = 3;
    const numUsers = peopleInLine.length;
  
    if (numUsers === 0) {
      return baseDuration; // Return base duration if there are no users in line
    }
  
    return Math.max(baseDuration + numUsers * incrementPerUser, 1);
  };

  const joinWaitingLine = () => {
    const newPerson = lastQueue.toString();
    setPeopleInLine([...peopleInLine, newPerson]);
    setLastQueue(lastQueue + 1);
  
    const newEstimatedTime = calculateEstimatedTime();
    console.log("New Estimated Time after joining line:", newEstimatedTime);
    setEstimatedTime(newEstimatedTime);
    console.log("Current Estimated Time:", estimatedTime); // Add this line
    if (newEstimatedTime !== null && newEstimatedTime <= 3) {
      setShowReminder(true);
      console.log("Reminder will be shown.");
    } else {
      console.log("Reminder will NOT be shown.");
    }
  };
  
  const getNextInQueue = () => {
    if (peopleInLine.length > 0) {
      return peopleInLine[0];
    } else {
      return '-';
    }
  };

  const serveNextPerson = () => {
    if (peopleInLine.length > 0) {
      const served = peopleInLine[0];
      setServedPerson(served);
      setPeopleInLine(peopleInLine.slice(1));
  
      const newEstimatedTime = Math.max(estimatedTime - 3, 0); // Decrease by 3 minutes
      
    console.log("New Estimated Time after serving next person:", newEstimatedTime);
      setEstimatedTime(newEstimatedTime);

      if (newEstimatedTime !== null && newEstimatedTime <= 4) {
        setShowReminder(true);
      }
    }
  };

  const handleTimeUp = () => {
    console.log("Time's up!");
  };

  return (  
    <div className="landingPageStyle">
      <div className="gradient-bg-landing">
        <Navbar className=" justify-content-between mb-0"  style={{backgroundColor: "#231099"}}>
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
          </div>

        <Container className='d-flex align-items-center justify-content-center'>
          <Row>
            <Col className="mt-4 mb-4">
              <Card className="mt-4 mb-4" style={{ 
                backgroundColor: 'rgba(255, 215, 0, 0.57)', 
                color: '#000000', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
              }}>
                <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                  <h1>Next in Queue</h1>
                  <div className="mt-2 me-4">{getNextInQueue()}</div>
                </Card.Body>
              </Card>
            
              <Card className="mt-2 mb-2 " style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.57)', 
                color: '#000000', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                padding: '30px'
              }}>
                <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                  <h1>Your Queue Number</h1>
                  <div className="mt-2 me-4">{lastQueue - 1}</div>
                </Card.Body>
              </Card>

              <Card className="mt-4 mb-4" style={{ 
                backgroundColor: 'rgba(255, 215, 0, 0.57)', 
                color: '#000000', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
              }}>
                <Card.Body className='text-center'>
                  <h2>From This Point:</h2>
                  <CountDownTimer peopleInLine={peopleInLine.length} estimatedTime={estimatedTime} />
                </Card.Body>
              </Card>

              <Container className="p-2 pb-0 d-flex justify-content-center">
                <Button variant="success" onClick={joinWaitingLine}>
                  Join the Line
                </Button>
                {isAdmin ? (
                  // Render the "Serve Next" button only if the user is not an admin
                  <Button variant="primary" className="ms-3" onClick={serveNextPerson}>
                    Serve Next
                  </Button>
                ) : null}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default QueuePageApp;
