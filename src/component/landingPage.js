import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import axios from 'axios';

function LandingPageApp() {
  const location = useLocation();
  const isAdmin = location.state.isAdmin;
  const userEmail = location.state.userEmail;
  const navigate = useNavigate();
  const [isAdminNotificationShown, setIsAdminNotificationShown] = useState(false);
  const [usersToVerify, setUsersToVerify] = useState([]);

  const updateUsersToVerify = (data) => {
    setUsersToVerify(data);
  };

  useEffect(() => {
    console.log("Users to Verify: ", usersToVerify);
    // Map over usersToVerify directly and create table rows
    const tableBodyContent = usersToVerify.map((user, index) => (
      `<tr key=${index}>
        <td>${user.email}</td>
        <td>
          <button onClick="handleDownload('${user.id}')">Download ID</button>
        </td>
      </tr>`
    )).join('');
    
    Swal.fire({
      title: 'Pending User Verifications',
      html: `
        <div style="max-height: 300px; overflow-y: auto;">
          <table style="margin: 0 auto;">
            <thead>
              <tr>
                <th>Email</th>
                <th>Download ID</th>
              </tr>
            </thead>
            <tbody id="userTableBody">
              ${tableBodyContent}
            </tbody>
          </table>
        </div>
      `,
      icon: 'info',
      width: '100%',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Fetch ID information for each user and dynamically populate the table rows
        const userTableBody = document.getElementById('userTableBody');

        result.data.forEach(user => {
          axios.post('http://localhost:3031/get-id', { email: user.email })
            .then(idRes => {
              const idDownloadLink = idRes.data.downloadLink;
              const row = `
                <tr>
                  <td>${user.lname}</td>
                  <td>${user.email}</td>
                  <td>
                    <a href="${idDownloadLink}" download>
                      <button>Download ID</button>
                    </a>
                  </td>
                </tr>
              `;
              userTableBody.innerHTML += row;
            })
            .catch(err => {
              console.error('Error fetching ID information:', err);
            });
        });
      }
    });
  }, [usersToVerify]);

  useEffect(() => {
    if (isAdmin && !isAdminNotificationShown) {
      axios.post('http://localhost:3031/verify-user')
        .then(res => {
          if (res.data && res.data.length > 0) {
            updateUsersToVerify(res.data);
            Swal.fire({
              title: 'Users to Verify',
              icon: 'info',
              html: `
                <p>You have pending user verifications. Please proceed to verify them</p>
              `,
              showCancelButton: true,
              confirmButtonText: 'OK',
            }).then((result) => {
              if (result.isConfirmed) {
                // Handle confirm action
                // For example, show another modal
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Handle cancel action
                // For example, close the modal or perform another action
                Swal.fire('Action Canceled', 'You chose not to proceed.', 'warning');
              }
            });
          }
          setIsAdminNotificationShown(true);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [isAdmin, isAdminNotificationShown]);
  

  const handleCardClick = (action) => {
    switch(action) {
      case 'joinQueue':
        navigate('/queuePage', { state: { isAdmin, userEmail } });
        break;
      case 'latestNews':
        //handle news action
        break;
      case 'candidatesProfile':
        navigate('/candidatesProfile', { state: { isAdmin } });
        break;
      case 'tipsAndTricks':
        navigate('/tipsAndTricks', { state: { isAdmin } });
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
                maxWidth: '350px',
                maxHeight: '120px',
                width: '100%',
                height:'100%',
                margin: '0 auto',
                padding: '30px' 
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
                maxWidth: '350px',
                maxHeight: '120px',
                width: '100%',
                height:'100%',
                margin: '0 auto',
                padding: '30px' 
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
                maxWidth: '350px',
                maxHeight: '120px',
                width: '100%',
                height:'100%',
                margin: '0 auto',
                padding: '30px' 
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
                maxWidth: '350px',
                maxHeight: '120px',
                width: '100%',
                height:'100%',
                margin: '0 auto',
                padding: '30px'  
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
