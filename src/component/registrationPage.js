import React from 'react';
import {Form,Button} from 'react-bootstrap';


function Registrationpage() {
  return (
    <>
    <Form style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label style={{ fontWeight: 'bold' }}>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Button style={{ width: '100%', marginTop: '15px' }}variant="primary" type="submit"> 
        Sign up
      </Button>  
    </Form>
    </>
  );
}

export default Registrationpage;