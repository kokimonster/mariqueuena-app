import React, { useContext, useState, useEffect } from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody} from 'react-bootstrap';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Validation from './loginValidation';
import Swal from 'sweetalert2';



function LoginPage({show, handleClose}) {
    // State hooks to store the values of the input fields
    const [values, setValues] = useState({
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
      setErrors(Validation(values));
      if(errors.email === "" && errors.password === "") {
        axios.post('http://localhost:3031/login', values)
        .then(res => {
          if(res.data === "Success") {
            navigate('/landingPage');
          } else {
            Swal.fire({
              icon: "error",
              title: "Incorrect credentials",
              text: "No record existed!"
            });
          }
        })
      }
    };

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
    // State to determine whether submit button is enabled or not
    // const [isActive, setIsActive] = useState(true);
    // useEffect(() => {

    //   //Validation to enable submit button when all fields are populated and both passwords matched
    //   if(email !== '' && password !== ''){
    //     setIsActive(true);
    //   }else{
    //     setIsActive(false);
    //   }
    // }, [email, password]);

  return (

    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login Form</Modal.Title>
      </Modal.Header>

      <ModalBody>
        <Form className="formStyle" onSubmit={handleSubmit} action = "">
            <Container>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder='Enter Email' 
                    name= 'email' 
                    onChange = {handleInput}/>
                    {/* onChange={(e) => setEmail(e.target.value)} */}
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder='Enter Password' 
                        name = 'password' 
                        onChange = {handleInput} />
                      {/* onChange={(e) => setPassword(e.target.value)} */}         
                      {errors.password && <span className='text-danger'> {errors.password}</span>}
                  </Form.Group>
              </Row>  
              <Row>
                <Col className='text-center' xs={12}>
                  <Button style={{ width:'150px'}}variant="success" id="loginBtn" type="submit"> 
                    Login
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </ModalBody>
    </Modal>
  );
}

export default LoginPage;