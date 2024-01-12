import React from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function RegistrationPage({show, handleClose}) {
  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
      <ModalBody>
        <Form className="formStyle">
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontWeight: 'bold' }} aria-placeholder='First Name'>First Name</Form.Label>
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

          <Row>
            <Col className='text-center' xs={12}>
              <Button style={{ width:'150px' }}variant="primary" type="submit"> 
                Sign up
              </Button>
            </Col>
          </Row>

        </Form>
      </ModalBody>
    </Modal>
  );
}

export default RegistrationPage;