import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../App.css';
import CountDownTimer from './CountdownTimer';


function LandingPageApp() {
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState(null);
  const [lastQueue, setLastQueue] = useState(1);
  const [estimatedTime, setEstimatedTime] = useState(1);
  const [showReminder, setShowReminder] = useState(false);
  
  useEffect(() => {
    if (showReminder) {
      Swal.fire({
        title: 'Your estimated waiting time is ',
        icon: 'info',
        text: 'Please prepare all necessary documents.',
        confirmButtonText: 'OK',
      });
      setShowReminder(false);
    }
  }, [showReminder]);

 // Run joinWaitingLine once when the component mounts
  useEffect(() => {
    joinWaitingLine();
  }, []);


  const calculateEstimatedTime = () => {
    if (peopleInLine.length === 0) {
      return null;
    }

    const baseDuration = 3;
    const incrementPerUser = 3;
    const numUsers = peopleInLine.length;

    let calculatedTime = numUsers * incrementPerUser;
    console.log(`Number of People in Line: ${numUsers}`)

    // if(numUsers < 0){
    //   let calculatedTime = numUsers * incrementPerUser;
    // } else {
    //   let calculatedTime = 1 * 3;
    // }
    console.log(`Calculated Time: ${Math.max(calculatedTime, 1)}`);

    return Math.max(calculatedTime, 1);
  };

  // useEffect(() => {
  //   const initialEstimatedTime = calculateEstimatedTime();
  //   console.log(`Initial Estimated Time: ${calculateEstimatedTime()}`)
  //   setEstimatedTime(initialEstimatedTime);
  //   if (initialEstimatedTime !== null && initialEstimatedTime <= 4) {
  //     setShowReminder(true);
  //   }
  // }, []);

  const joinWaitingLine = () => {
    const newPerson = lastQueue.toString();
    setPeopleInLine([...peopleInLine, newPerson]);
    setLastQueue(lastQueue + 1);

    const estimatedTime = calculateEstimatedTime();
    setEstimatedTime(estimatedTime);
    if (estimatedTime !== null && estimatedTime <= 4) {
      setShowReminder(true);
    }
  };

  const getNextInQueue = () => {
    if (peopleInLine.length > 0) {
      return peopleInLine[0];
    } else {
      return `-`;
    }
    return null;
  };

  const serveNextPerson = () => {
    if (peopleInLine.length > 0) {
      const served = peopleInLine[0];
      setServedPerson(served);
      setPeopleInLine(peopleInLine.slice(1));
    }
  };

  const handleTimeUp = () => {
    // Add your logic here when the estimated waiting time is up
    // For example, show a notification
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

        <Container className='d-flex align-items-center justify-content-center'>
          <Row>
            <Col className="mt-4 mb-4">

              {/* Next in Queue */}
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
            
              {/* Your Queue Number */}
              <Card className="mt-2 mb-2 " style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.57)', 
                color: '#000000', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
              }}>
                <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                  <h1>Your Queue Number</h1>
                  <div className="mt-2 me-4">{lastQueue - 1}</div>
                </Card.Body>
              </Card>

              {/* Estimated Waiting Time */}
              <Card className="mt-4 mb-4" style={{ 
                backgroundColor: 'rgba(255, 215, 0, 0.57)', 
                color: '#000000', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
              }}>
              <Card.Body className='text-center'>
                  <h2>From This Point:</h2>
                  <CountDownTimer peopleInLine={peopleInLine.length} />
              </Card.Body>
              </Card>

              <Container className="p-2 pb-0 d-flex justify-content-center">
                <Button variant="success" onClick={joinWaitingLine}>
                  Join the Line
                </Button>
                <Button variant="primary" className="ms-3" onClick={serveNextPerson}>
                  Serve Next
                </Button>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LandingPageApp;