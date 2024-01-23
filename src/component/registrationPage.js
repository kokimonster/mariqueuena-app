import React, { useState } from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './regValidation'
import Swal from 'sweetalert2';

function RegistrationPage({show, handleClose}) {
  
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});

    // State hooks to store the values of the input fields
    const [values, setValues] = useState({
      fName: '',
      lName: '',
      email: '',
      password: ''
    })  

    const handleInput = (event) => {
      setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = Validation(values);
      setErrors(validationErrors);
    
      if (Object.keys(validationErrors).length === 0) {
        // Continue with form submission
        axios.post('http://localhost:3031/registrationPage', values)
          .then(res => {
            if (res.data.error) {
              // Registration error, show SweetAlert error
              Swal.fire({
                icon: "error",
                title: "Registration Error",
                text: res.data.error,
              });
            } else {
              // Registration successful, close the modal
              handleClose();
            }
          })
          .catch(err => {
            console.log(err);
            // Handle other errors if needed
            Swal.fire({
              icon: "error",
              title: "Registration Error",
              text: "An error occurred during registration.",
            });
          });
      }
    };

  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
      <ModalBody>
        <Form className="formStyle" onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                <Form.Label style={{ fontWeight: 'bold' }} aria-placeholder='First Name'>First Name</Form.Label>
                <Form.Control
                  placeholder='Enter your first name'
                  type="text"
                  name = "fName" 
                  onChange = {handleInput}
                />
                {errors.fName && <span className='text-danger'> {errors.fName}</span>}
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicLastName">
                <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
                <Form.Control
                  placeholder='Enter your last name'
                  type="text"
                  name = "lName" 
                  onChange = {handleInput}
                />
                {errors.lName && <span className='text-danger'> {errors.lName}</span>}
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                <Form.Control
                  placeholder='Enter your email'
                  type="email"
                  name = "email" 
                  onChange = {handleInput}
                />
                {errors.email && <span className='text-danger'> {errors.email}</span>}
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name = "password" 
                  onChange = {handleInput}
                />
                {errors.password && <span className='text-danger'> {errors.password}</span>}
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword2">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name = "password2" 
                  onChange={handleInput}
                />
                {errors.password2 && <span className='text-danger'> {errors.password2}</span>}
            </Form.Group>
          </Row>
          <Row>
            <Col className='text-center' xs={12}>
              <Form.Group>
                <Button style={{ width:'150px' }}variant="primary" type="submit"> 
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