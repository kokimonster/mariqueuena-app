import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal, ModalBody } from 'react-bootstrap';
import Swal from 'sweetalert2';
import BasicInfoForm from './basicInfoForm';
import PasswordForm from './PasswordForm';

function RegistrationPage({ show, handleClose }) {
    const [currentPage, setCurrentPage] = useState(1); // Track current page (1 for basic info, 2 for password)
    const [values, setValues] = useState({}); // Store form values
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // Reset state when the modal is closed
    const resetState = () => { 
      setCurrentPage(1);
      setValues({});
  };

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleNext = () => {
        if (currentPage === 1) {
            // Proceed to password creation page
            setCurrentPage(2);
        } else {

        const confirmPasswordValue = values.confirmPassword;
        setConfirmPassword(confirmPasswordValue);
        // Check if passwords match
        if (values.password && confirmPasswordValue !== values.password) {
            setPasswordError('Passwords do not match.');
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: 'Passwords do not match.',
            });
        } else {
                setPasswordError('');
                console.log('Basic Info:', values);
                console.log('Password:', values.password);
                handleClose(); // Close modal after submission
                resetState();  // Reset the modal after submission
            }
        }
    };

    return (
        <Modal className="modal" show={show} onHide={() => { handleClose(); resetState();}}>
            <Modal.Header> 
                <Modal.Title>{currentPage === 1 ? 'Basic Information' : 'Create Password'}</Modal.Title>
            </Modal.Header>
            <ModalBody>
                {currentPage === 1 ? (
                    <BasicInfoForm values={values} handleInput={handleInput} />
                ) : (
                    <PasswordForm values={values} handleInput={handleInput} />
                )}
                <Row>
                    <Col className='text-center' xs={12}>
                        <Form.Group>
                            <Button style={{ width: '150px' }} variant="primary" onClick={handleNext}>
                                {currentPage === 1 ? 'Next' : 'Submit'}
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
}

export default RegistrationPage;
