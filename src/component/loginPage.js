import React, { useContext, useState, useEffect } from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';


function LoginPage({show, handleClose}) {

  // State hooks to store the values of the input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State to determine whether submit button is enabled or not
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    //Validation to enable submit button when all fields are populated and both passwords matched
    if(email !== '' && password !== ''){
      setIsActive(true);
    }else{
      setIsActive(false);
    }
  }, [email, password]);

  // function authenticate(e) {

  //   e.preventDefault();

  //   fetch('${process.env.REACT_APP_API_URL}/users/login', {
  //     method: "POST",
  //     headers: {
  //       "Content-type" : "appplication/json"
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);

  //     if(typeof data.access !== "")
  //   })

  // }

function handleSubmit(event){
  event.preventDefault();
  axios.post("http://localhost:8081/")
}
  
  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
      <ModalBody>
        <Form className="formStyle" onSubmit={handleSubmit}>
            <Container>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                  <Form.Control type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                  <Form.Control type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required />
                </Form.Group>
              </Row>
                  
              <Row>
                <Col className='text-center' xs={12}>
                  { isActive ?
                  <Link to="/landingPage">
                    <Button style={{ width:'150px'}}variant="success" id="loginBtn" type="submit"> 
                      Login
                    </Button>
                  </Link> 
                  : 
                  <Button style={{ width:'150px'}}variant="danger" id="loginBtn" type="submit" disabled> 
                    Login
                  </Button>
                }

                </Col>
              </Row>
              
            </Container>
          </Form>
        </ModalBody>
    </Modal>
  );
}

export default LoginPage;