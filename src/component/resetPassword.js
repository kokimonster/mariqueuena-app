import React, { useState, useRef } from 'react';
import {Form,Button, Row, Col, Modal, ModalBody, InputGroup} from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../App.css';

const ResetPassword = ({show, handleClose}) => {
    const [values, setValues] = useState({
        email: '',
        combinedCode: ''
    });

    const [error, setError] = useState({});
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [combinedCode, setCombinedCode] = useState({});
    const inputRefs = useRef([]);


    const resetState = () => {
        setValues({ email: '', combinedCode: '' });
        setError({});
        setCode(["", "", "", "", "", ""]);
        setCombinedCode('');
    }
    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
  
    const handleInputCode = (index, value) => {
        const updatedCode = [...code];
        updatedCode[index] = value;
        setCode(updatedCode);
        const combinedCode = updatedCode.join('');
        setCombinedCode(combinedCode);

        // Move focus to the next input field
        if (value.length === 1 && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && code[index] === '') {
          // Move focus to the previous input field
          inputRefs.current[index - 1].focus();
        }
      };

    const handlePaste = (event, index) => {
        const pastedData = event.clipboardData.getData('Text');
        const pastedValues = pastedData.split('').slice(0, 6); // Extract up to 6 characters
        const updatedCode = [...code];
    
        // Distribute pasted values among input fields starting from the current index
        pastedValues.forEach((value, i) => {
          if (index + i < 6) {
            updatedCode[index + i] = value;
          }
        });
    
        setCode(updatedCode);
      };

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        const errors = validateForm(values);
        setError(errors);
    
        if (Object.keys(errors).length === 0) {
            // Proceed with form submission
            axios.post('http://localhost:3031/forgot-password', values)
                .then(res => {
                    if (res.data === "Success") {
                        // Show success message with SweetAlert
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Password reset link sent successfully!',
                        });
                    } else {
                        // Show error message with SweetAlert
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to send reset password link. Please check your email.',
                        });
                    }
                })
                .catch(error => {
                    // Show error message with SweetAlert
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An unexpected error occurred. Please try again later.',
                    });
                });
        }
    };

      const validateForm = (values) => {
        let error = {};
      
        if (!values.email) {
          error.email = 'Email is required';
        }
      
        return error;
      }

    return(
        <Modal className="modal" show={show} onHide ={() => { handleClose(); resetState(); }}>
            <Modal.Header>
                <Modal.Title>Forgot Password</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form className='formStyle' onSubmit={handleSubmit}>
                <Row>
                    <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <InputGroup>
                        <Form.Control
                            type="email"
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            value = {values.email || ''}
                            isInvalid={error.email}
                        />
                        <Form.Control.Feedback className= "custom-feedback" type ="invalid">{error.email}</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className = "mb-3" controlId = "formVerifyCode">
                        <Form.Label style = {{fontWeight: 'bold'}}>Enter Verification Code</Form.Label>
                        <InputGroup>
                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                <Col key={index} xs={2}>
                                    <Form.Control
                                    style = {{textAlign: 'center'}}
                                    type="text"
                                    maxLength="1"
                                    value={code[index]}
                                    onChange={(e) => handleInputCode(index, e.target.value)}
                                    onPaste={(e) => handlePaste(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(input) => (inputRefs.current[index] = input)}
                                />
                                </Col>
                            ))}
                        </InputGroup>
                        <Row className="mb-3">
                            <Col>
                                <p style={{ cursor: 'pointer', color: 'black', fontSize: '12px', marginLeft: '10px', display: 'inline', textAlign: 'left' }}>
                                    Resend Code
                                </p>
                            </Col>
                        </Row>
                    </Form.Group>
                </Row>

                    <Row>
                        <Col className='text-center' xs={12}>
                            <Button style={{ width: '150px' }}  id="resetBtn" type="submit">
                                Verify Code
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>

    )
};

export default ResetPassword;