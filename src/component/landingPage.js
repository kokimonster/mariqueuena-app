import React, {useEffect, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from "react-bootstrap";
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
      <h1>YOUR QUEUE NUMBER IS:</h1>
      <ul>
        {firstPerson && (
          <div className='mt-3'>{firstPerson}</div>
        )}
      </ul>
      <Button variant="success" onClick={joinQueue}>
        Join the Line
      </Button>{' '}
      <Button variant="primary" onClick={serveNext}>
        Serve Next
      </Button>
    </div>
  );
};

// page background
const containerStyle = {
  background: 'linear-gradient(31deg, rgba(251,229,15,1) 0%, rgba(156,135,76,1) 12%, rgba(121,101,98,1) 17%, rgba(35,16,153,1) 50%, rgba(113,93,103,1) 86%, rgba(182,161,59,1) 97%, rgba(251,229,15,1) 100%)',
  backgroundSize: 'cover',  // Set background size to cover the entire container
  backgroundPosition: 'center',  // Center the background image
  backgroundRepeat: 'no-repeat',  // Prevent background image from repeating
  height: '100vh',
};

function LandingPageApp () {
 
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState(null);

  // Function to join the waiting line
  const joinWaitingLine = () => {
    const newPerson = `${peopleInLine.length + 1}`;
    setPeopleInLine([...peopleInLine, newPerson]);
  };

  // Function to serve the next person in line
  const serveNextPerson = () => {
    if (peopleInLine.length > 0) {
      const served = peopleInLine[0];
      setServedPerson(served);
      setPeopleInLine(peopleInLine.slice(1));
    }
  };

  // Function to calculate estimated waiting time
  const calculateEstimatedTime = () => {

    if (peopleInLine.length == 0){
      return null;
    }

    const baseDuration = 3; // 3 minutes
    const incrementPerUser = 1; // Increment duration for each user
    const maxDuration = 5; // Maximum waiting time (in minutes) before incrementing
    const numUsers = peopleInLine.length;
    let estimatedTime = baseDuration + numUsers * incrementPerUser;

    // if (estimatedTime > maxDuration) {
    //   estimatedTime += 0.5 * baseDuration; // Add 50% of base duration if it exceeds the maximum
    // }

    return estimatedTime;
  };

  return (  
    <div className="App" style={containerStyle}>
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
      
      <Container className="mt-4 d-flex justify-content-center align-items-center">
        <Row style={{ height: '100%' }}>
          <Col md={12} className="mb-4 d-flex flex-column justify-content-between">
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
            
            <Card className="mt-4 flex-grow-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.57)', color: '#000000', height: '100%' }}>
              <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
              
                {/* display queue */}
                {/* {servedPerson ? servedPerson.number : 'No Queue'} */}
                
              <Queue people={peopleInLine} joinQueue={joinWaitingLine} serveNext={serveNextPerson} />
              </Card.Body>
            </Card>

            <Card className="mt-4 flex-grow-1" style={{ backgroundColor: 'rgba(255, 215, 0, 0.57)', color: '#000000',  }}>
            {/* position: 'absolute', bottom: 0, width: '68%' */}
              <Card.Body className='text-center'>
                <Card.Title>FROM THIS POINT</Card.Title>
                <Card.Text>
                  ESTIMATED WAITING TIME: {calculateEstimatedTime()}
                  {/* ESTIMATED WAITING TIME: {calculateEstimatedTime() !== null ? '${calculateEstimatedTime()} minutes' : ''} */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='mt-4 d-flex justify-content-center alignt-items-center'>

      </Container>

      </div>
  );
}
export default LandingPageApp;