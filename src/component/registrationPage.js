import React from 'react';
import {Form,Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function RegistrationPage() {
  const formStyle = { 
    maxWidth: '400px', 
    margin: '50px auto', 
    padding: '20px', 
    border: '1px solid #ced4da', 
    borderRadius: '5px', 
    backgroundColor: '#fff', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 

  }

  return (

    <header className='Sign-up'>
    <div className='form-container'>

      <Form style={formStyle}>
      <div className='d-flex justify-content-center'>
      <h2>Sign Up Form</h2>

    </div>
      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label style={{ fontWeight: 'bold' }}>First Name</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
            <Form.Control type="email" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
      </Row>

      <Container>
        <Row>
          <Col className='text-center' xs={6}>
            <Button style={{ width:'150px', marginRight: '15px'}}variant="primary" type="submit"> 
              Sign up
            </Button>
          </Col>
          
          <Col className='text-center' xs={6}>
            <Link to="/">
              <Button style={{ width:'150px', marginLeft: '15px'}}variant="primary" type="submit"> 
                Back To Home
              </Button>  
            </Link>
          </Col>
        </Row>
      </Container>
    </Form>
    </div>
    </header>
  );
}

export default RegistrationPage;