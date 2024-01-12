import React from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function LoginPage({show, handleClose}) {

  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
      <ModalBody>
        <Form className="formStyle">
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
                  
              <Row>
                <Col className='text-center' xs={12}>
                  <Button style={{ width:'150px'}}variant="primary" type="submit"> 
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