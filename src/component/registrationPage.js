import React, { useState } from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegistrationPage({show, handleClose}) {
    // State hooks to store the values of the input fields
    const [values, setValues] = useState({
      fName: '',
      lName: '',
      email: '',
      password: ''
    })  

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
      setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // setValues(Validation(values));
      axios.post('http://localhost:3031/registrationPage', values)
      .then(res => {
        handleClose();
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
      <ModalBody>
        <Form className="formStyle" action="">
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                <Form.Label style={{ fontWeight: 'bold' }} aria-placeholder='First Name'>First Name</Form.Label>
                <Form.Control type="text" name = "fName" onChange = {handleInput}/>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicLastName">
                <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
                <Form.Control type="text" name = "lName" onChange = {handleInput}/>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                <Form.Control type="email" name = "email" onChange = {handleInput}/>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <Form.Control type="password" name = "password" onChange = {handleInput}/>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword2">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control type="password" name = "password2" />
            </Form.Group>
          </Row>

          <Row>
            <Col className='text-center' xs={12}>
              <Form.Group>
                <Button style={{ width:'150px' }}variant="primary" type="submit" onClick={handleSubmit}> 
                  Sign up
                </Button>
              </Form.Group>
            </Col>
          </Row>

        </Form>
      </ModalBody>
    </Modal>
  );
}

export default RegistrationPage