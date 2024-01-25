import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../App.css';

function LandingPageApp() {
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState(null);
  const [lastQueue, setLastQueue] = useState(1);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    if (showReminder) {
      Swal.fire({
        title: 'You are nearing your estimated wait time!',
        icon: 'info',
        text: 'Please prepare all necessary documents.',
        confirmButtonText: 'OK',
      });
      setShowReminder(false);
    }
  }, [showReminder]);


  const joinWaitingLine = () => {
    const newPerson = lastQueue.toString();
    setPeopleInLine([...peopleInLine, newPerson]);
    setLastQueue(lastQueue + 1);

    const estimatedTime = calculateEstimatedTime();
    if (estimatedTime !== null && estimatedTime <= 4) {
      setShowReminder(true);
    }
  };

  useEffect(() => {
    joinWaitingLine();
  }, []); // Run joinWaitingLine once when the component mounts

  const calculateEstimatedTime = () => {
    if (peopleInLine.length === 0) {
      return null;
    }

    const baseDuration = 3;
    const incrementPerUser = 3;
    const numUsers = peopleInLine.length;

    let calculatedTime = numUsers * incrementPerUser;

    return calculatedTime;
  };

  const getNextInQueue = () => {
    if (peopleInLine.length > 0) {
      return peopleInLine[0];
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

  return (  
    <div className="landingPageStyle">
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
      
      <div className="gradient-bg-landing">
        <div>
          <Container>
            <Row style={{ height: '100%' }}>
              <Col md={12} className="mb-4 d-flex flex-column justify-content-between">

                {/* Next in Queue */}
                <Card className="mt-4 flex-grow-1" style={{ backgroundColor: 'rgba(255, 215, 0, 0.57)', color: '#000000' }}>
                  <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                    <h1>Next in Queue</h1>
                    <div className="mt-3 me-4">{getNextInQueue()}</div>
                  </Card.Body>
                </Card>
                
                {/* Your Queue Number */}
                <Card className="mt-4 flex-grow-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.57)', color: '#000000', height: '100%' }}>
                  <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                    <h1>Your Queue Number</h1>
                    <div className="mt-3 me-4">{lastQueue - 1}</div>
                  </Card.Body>
                </Card>

                {/* Estimated Waiting Time */}
                <Card className="mt-4 flex-grow-1" style={{ backgroundColor: 'rgba(255, 215, 0, 0.57)', color: '#000000',  }}>
                    <Card.Body className='text-center'>
                    <h1>Estimated Waiting Time</h1>
                    <div className="mt-3 me-4">{calculateEstimatedTime()} MINUTES</div>
                  </Card.Body>
                </Card>

                <Button variant="primary" className="mt-4" onClick={serveNextPerson}>
                  Serve Next
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default LandingPageApp;