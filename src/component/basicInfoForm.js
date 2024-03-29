import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const BasicInfoForm = ({ values, handleInput }) => {
    return (
        <Form>
            <Row className='mb-3'>
                <Form.Label style={{ fontWeight: 'bold' }}>Name</Form.Label>
                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='First Name'
                            type='text'
                            name='fName'
                            value={values.fName || ''}
                            onChange={handleInput}
                            autoFocus
                        />
                        <label htmlFor="floatingInputCustom">First Name</label>
                    </Form.Floating>
                </Form.Group>

                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='Middle Initial'
                            type="text"
                            name="mInitial"
                            value={values.mInitial || ''}
                            onChange={handleInput}
                        />
                        <label htmlFor="floatingInputCustom">Middle Initial</label>
                    </Form.Floating>
                </Form.Group>

                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='Last Name'
                            type="text"
                            name="lName"
                            value={values.lName || ''}
                            onChange={handleInput}
                        />
                        <label htmlFor="floatingInputCustom">Last Name</label>
                    </Form.Floating>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formDate'>
                    <Form.Label style={{ fontWeight: 'bold' }}>Date of Birth</Form.Label>
                    <Form.Control
                        placeholder='YYYY/MM/DD'
                        type="date"
                        name="dateOfBirth"
                        value={values.dateOfBirth || ''}
                        onChange={handleInput}
                    />
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Label style={{ fontWeight: 'bold' }}>Contact Information</Form.Label>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='Mobile Number'
                            type="text"
                            name="mNumber"
                            value={values.mNumber || ''}
                            onChange={handleInput}
                        />
                        <label htmlFor="floatingInputCustom">Mobile Number</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='Email'
                            type="text"
                            name="email"
                            value={values.email || ''}
                            onChange={handleInput}
                        />
                        <label htmlFor="floatingInputCustom">Email Address</label>
                    </Form.Floating>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formValidId'>
                    <Form.Label style={{ fontWeight: 'bold' }}>Valid ID</Form.Label>
                    <Form.Floating>
                        <Form.Select aria-label="Default select example">
                            <option>Select ID Type: </option>
                            <option value="1">Driver's License</option>
                            <option value="2">SSS</option>
                            <option value="3">PhilHealth ID</option>
                            <option value="4">Passport</option>
                        </Form.Select>
                        <label htmlFor='floatingInputCustom'>ID Type</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='ID Verification'
                            type="file"
                            name="idImage"
                            onChange={handleInput}
                        />
                        <label htmlFor="floatingInputCustom">ID Verification*</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='ID Number'
                            type="text"
                            name="idNumber"
                            value={values.idNumber || ''}
                            onChange={handleInput}
                        />
                        <label htmlFor="floatingInputCustom">ID Number</label>
                    </Form.Floating>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default BasicInfoForm;
