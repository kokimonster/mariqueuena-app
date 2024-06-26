import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import axios from 'axios';
import CountDownTimer from './CountdownTimer';


function QueuePageApp() {
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState(null);
  const [lastQueue, setLastQueue] = useState(1);
  const [userQueueNumber, setUserQueueNumber] = useState({});
  const [estimatedTime, setEstimatedTime] = useState(3); // Initialize estimatedTime as an integer
  const [showReminder, setShowReminder] = useState(false);
  const location = useLocation();
  const isAdmin = location.state.isAdmin;
  const userEmail = location.state.userEmail;

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

  const resetState = () => { 
    setPeopleInLine([]);
    setServedPerson(null);
  };

  useEffect(() => {
    const joinWaitingLine = async () => {
      try {
        // Fetch users who are already in the queue from your database
        const queueResponse = await axios.get('http://localhost:3031/getInQueue?inQueue=1');
        
        // Check if the response data is an array
        if (Array.isArray(queueResponse.data)) {
          // Iterate over each object returned by the API
          queueResponse.data.forEach((user, index) => {
            // Update the lastQueue with the current index plus one
            const newPerson = lastQueue.toString();
            setPeopleInLine(queueResponse.data.map((user, index) => (index + 1).toString()));
            // setPeopleInLine([...peopleInLine, newPerson]);
            setLastQueue(index + 1);
          });
        }
        
        let queueNumberPass = lastQueue;
        console.log("Queue Number ni User: " + queueNumberPass);
  
        // Make the post request
        const addQueueResponse = await axios.post('http://localhost:3031/addQueue', { email: userEmail, number: queueNumberPass });
  
        if (addQueueResponse.data.message === "Success") {
          setUserQueueNumber(addQueueResponse.data.number);
  
          // Handle any additional logic here if needed
        } else if (addQueueResponse.data.message === "Already in Queue") {
          Swal.fire({
            title: 'Already in Queue',
            icon: 'warning',
          });
        }
      } catch (error) {
        console.error('Error:', error);
      }

      const newEstimatedTime = calculateEstimatedTime();
      console.log("New Estimated Time after joining line:", newEstimatedTime);
      setEstimatedTime(newEstimatedTime);
      if (newEstimatedTime !== null && newEstimatedTime <= 3) {
        setShowReminder(true);
        console.log("Reminder will be shown.");
      } else {
        console.log("Reminder will NOT be shown.");
      }

    };
    // Call the function to join waiting line when the component mounts
    joinWaitingLine();
    
  }, [showReminder]); 
  
  const getNextInQueue = () => {
    if (peopleInLine.length > 0) {
      return peopleInLine[0];
    } else {
      return '-';
    }
  };

  const serveNextPerson = () => {
    console.log("Number of people in line:", peopleInLine.length);

    if (peopleInLine.length > 0) {
      const served = peopleInLine[0];
      setServedPerson(served);
      setPeopleInLine(peopleInLine.slice(1));
  
      // axios.get('http://localhost:3031/removeQueue')
    }
  };

  const handleTimeUp = () => {
    console.log("Time's up!");
  };
  

  // const calculateEstimatedTime = () => {
  //   const baseDuration = 3;
  //   const incrementPerUser = 3;
  //   return Math.max(baseDuration * incrementPerUser, 1);
  // };
  
  const calculateEstimatedTime = () => {
    const baseDuration = 3;
    const incrementPerUser = 3;
    const numUsers = peopleInLine.length;
  
    if (numUsers === 0) {
      return baseDuration; // Return base duration if there are no users in line
    }
  
    return Math.max(baseDuration + numUsers * incrementPerUser, 1);
  };

  // const joinWaitingLine = () => {
  //   // Fetch users who are already in the queue from your database
  //   axios.get('http://localhost:3031/getInQueue?inQueue=1')
  //   .then(res => {
  //     // Check if the response data is an array
  //     if (Array.isArray(res.data)) {
  //       // Iterate over each object returned by the API
  //       res.data.forEach((user, index) => {
  //         // Update the lastQueue with the current index plus one
  //         const newPerson = lastQueue.toString();
  //         setPeopleInLine([...peopleInLine, newPerson]);
  //         setLastQueue(index + 1);
  //       });
  //     }
  //     let queueNumberPass = lastQueue;
  //     console.log("Queue Number ni User: " + queueNumberPass);

  //     axios.post('http://localhost:3031/addQueue', { email: userEmail, number: queueNumberPass})
  //     .then(res => {
  //         if(res.data.message === "Success") {
  //           setUserQueueNumber(res.data.number);
  
  //         } else if (res.data.message === "Already in Queue"){
  //           Swal.fire({
  //             title: 'Already in Queue',
  //             icon: 'warning',
  //           });
  //         }
  //     })

  //   })
  //   .catch(err => {
  //     console.error('Error fetching queue data:', err);
  //   });

  //   const newEstimatedTime = calculateEstimatedTime();
  //   console.log("New Estimated Time after joining line:", newEstimatedTime);
  //   setEstimatedTime(newEstimatedTime);
  //   if (newEstimatedTime !== null && newEstimatedTime <= 3) {
  //     setShowReminder(true);
  //     console.log("Reminder will be shown.");
  //   } else {
  //     console.log("Reminder will NOT be shown.");
  //   }
  // };
  
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
                  <h1>Now Serving: </h1>
                  <div className="mt-2 me-4">{getNextInQueue()}</div>
                </Card.Body>
              </Card>
            
              {!isAdmin && (
                <div>
                  <Card className="mt-2 mb-2 " style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.57)', 
                    color: '#000000', 
                    borderRadius: '15px', 
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    padding: '30px'
                  }}>
                    <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                      <h1>Your Queue Number</h1>
                      <div className="mt-2 me-4">{lastQueue}</div>
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
                </div>
              )}

              <Container className="p-2 pb-0 d-flex justify-content-center">
              {isAdmin && (
                  <div>
                    <Button variant="primary" onClick={() => resetState()}>
                      Reset Queue
                    </Button>
                    <Button variant="primary" className="ms-3" onClick={() => serveNextPerson()}>
                      Serve Next
                    </Button>
                  </div>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default QueuePageApp;
