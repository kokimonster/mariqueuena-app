import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function LoginPage() {
  return (
    <div className='form-container'>
      <h2>Login Form</h2>
    <Form style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Button style={{ width: '100%', marginTop: '15px' }}variant="primary" type="submit">
        Login
      </Button>  

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </Form>
    </div>
  );
}

export default LoginPage;