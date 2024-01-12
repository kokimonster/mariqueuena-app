import React from 'react';
import {Form,Button, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function LoginPage() {
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
    <header className='Login'>

    
    <div className='form-container'>

    <Form style={formStyle}>
      <div className='d-flex justify-content-center'>
      <h2>Login Form</h2>

      </div>
      <Container>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Row>
      </Container>
      
      <Container>
        <Row>
          <Col className='text-center' xs={6}>
            <Button style={{ width:'150px', marginRight: '15px'}}variant="primary" type="submit"> 
              Login
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

      {/* <Container>
        <Row>
          <Col className='text-center'>
            <Button style={{ width:'150px', marginRight: '15px'}}variant="primary" type="submit"> 
            Login
            </Button>
            <Link to="/">
              <Button style={{ width:'150px', marginLeft: '15px'}}variant="primary" type="submit"> 
                Back To Home
              </Button>  
            </Link>
          </Col>
        </Row>
      </Container> */}
 
      {/*<Button style={{ width: '50%', marginTop: '15px' }}variant="primary" type="submit">
        Login
      </Button>  

      <Link to="/">
      <Button style={{ width:'50%', marginRight: '15px'}}variant="primary" type="submit"> 
        Back To Home
      </Button>  
      </Link> */}

    </Form>
    </div>

    </header>
  );
}

export default LoginPage;