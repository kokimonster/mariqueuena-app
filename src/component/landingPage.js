import React, {useEffect, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from "react-bootstrap";
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';

// // admin view queue
// const Queue = ({ people, joinQueue, serveNext }) => (
//   <div>
//     <h1>YOUR QUEUE NUMBER IS:</h1>
//     <ul>
//       {people.map((person, index) => (
//         <li key={index}>{person}</li>
//       ))}
//     </ul>
//     <Button variant="success" onClick={joinQueue}>
//       Join the Line
//     </Button>{' '}
//     <Button variant="primary" onClick={serveNext}>
//       Serve Next
//     </Button>
//   </div>

// );

//user view queue
const Queue = ({ people, joinQueue, serveNext }) => {
  // Show only the first person in the queue
  const firstPerson = people.length > 0 ? people[0] : null;

  return (
    
      <div>
        {/* ternary if else to display no queue */}
        {firstPerson ? (
          <>
            <h1>YOUR QUEUE NUMBER IS:</h1>
            <ul className='text-center'>
              {firstPerson && (
                <div className='mt-3 me-4'>{firstPerson}</div>
              )}
            </ul>
          </>
        ) : <h1>No Queue</h1>}

        <Button variant="success" onClick={joinQueue}>
          Join the Line
        </Button>{' '}
        <Button variant="primary" onClick={serveNext}>
          Serve Next
        </Button>
      </div>
    
    
  );
};

function LandingPageApp () {
 
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState(null);
  const [lastQueue, setLastQueue] = useState(1);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    // Use SweetAlert2 modal when the reminder is triggered
    if (showReminder) {
      Swal.fire({
        title: 'Your are nearing your estimated wait time!',
        icon: 'info',
        text: 'Please prepare all necessary documents.',
        confirmButtonText: 'OK',
      });
      // Reset the showReminder state to false after showing the modal
      setShowReminder(false);
    }
  }, [showReminder]); // useEffect will run when showReminder changes

  // Function to join the waiting line
  const joinWaitingLine = () => {

    // const newPerson = `${peopleInLine.length + 1}`;    
    const newPerson = lastQueue.toString();
    setPeopleInLine([...peopleInLine, newPerson]);
    setLastQueue(lastQueue + 1);

    const estimatedTime = calculateEstimatedTime();
    if (estimatedTime !== null && estimatedTime <= 4) {
      // Show reminder if estimated time is less than or equal to 5 minutes
      setShowReminder(true);
    }

    // console.log(`
    // new person: ${newPerson}
    // last queue: ${lastQueue}
    // people in lineJWLL: ${peopleInLine[0]}`);
  };

  // Function to serve the next person in line
  const serveNextPerson = () => {
    if (peopleInLine.length > 0) {    
      const served = peopleInLine[0];
      setServedPerson(served);
      setPeopleInLine(peopleInLine.slice(1));
      
      // console.log(`served : ${served}`);
      // console.log(`people in line: ${peopleInLine}`);
    } else {

    }
  };

  // Function to calculate estimated waiting time
  const calculateEstimatedTime = () => {

    if (peopleInLine.length == 0){
      return null;
    }

    const baseDuration = 3; // 3 minutes
    const incrementPerUser = 3; // Increment duration for each user
    const maxDuration = 5; // Maximum waiting time (in minutes) before incrementing
    const numUsers = peopleInLine.length;
    console.log(`Number of Users: ${peopleInLine.length}
                 Base Duration" ${baseDuration}
                 Increment: ${incrementPerUser}`);
    
    let calculatedTime  = numUsers * incrementPerUser;

    // if (calculatedTime > maxDuration) {
    //   calculatedTime += (0.5 * baseDuration); // Add 50% of base duration if it exceeds the maximum
    // }

    return calculatedTime;
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

                {/* Serving */}
                <Card className="mt-4 flex-grow-1" style={{ backgroundColor: 'rgba(255, 215, 0, 0.57)', color: '#000000' }}>
                  <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                  <div>
                    <h1>NOW SERVING:</h1>
                      </div>
                        {servedPerson && (
                        <div className="mt-3 "> {servedPerson}
                        </div>
                    )}
                  </Card.Body>
                </Card>
                
                {/* Queue */}
                <Card className="mt-4 flex-grow-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.57)', color: '#000000', height: '100%' }}>
                  <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                    <Queue people={peopleInLine} joinQueue={joinWaitingLine} serveNext={serveNextPerson} />
                  </Card.Body>
                </Card>
                
                {/* Estimation Time */}
                <Card className="mt-4 flex-grow-1" style={{ backgroundColor: 'rgba(255, 215, 0, 0.57)', color: '#000000',  }}>
                  {/* position: 'absolute', bottom: 0, width: '68%' */}
                    <Card.Body className='text-center'>
                      <Card.Title>FROM THIS POINT</Card.Title>
                        <Card.Text className='text-center'>
                          ESTIMATED WAITING TIME: {calculateEstimatedTime() !== null ? (
                            `${calculateEstimatedTime()} MINUTES`) : <p></p>}
                          {/* ESTIMATED WAITING TIME: {calculateEstimatedTime() !== null ? '${calculateEstimatedTime()} minutes' : ''} */}
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className='mt-4 d-flex justify-content-center alignt-items-center'>
      
              {/* burahin mo nalang ako kiko */}
              <Link to = "/">
                <Button style={{ width:'150px' }}variant="primary" type="submit"> 
                      Test
                </Button>
              </Link>

          </Container>
        </div>
      </div>
    </div>
  );
}

export default LandingPageApp;