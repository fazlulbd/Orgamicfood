import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const Address = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <div className="info_header text-center ">
                    <h2>Your Information</h2>
                    </div>
                </Modal.Header>
                <Form className='p-5'>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustomUsername">
                                <Form.Label column="sm">Full Name</Form.Label>
                                <Form.Control type="text" placeholder="enter your name" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="formGridAddress1">
                                <Form.Label column="sm">Address</Form.Label>
                                <Form.Control type="text" placeholder="enter your address" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom03">
                                <Form.Label column="sm">Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="enter your mobile number" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom05">
                                <Form.Label column="sm">Province</Form.Label>
                                <Form.Control type="text" placeholder="province" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom06">
                                <Form.Label column="sm">City</Form.Label>
                                <Form.Control type="text" placeholder="enter your city" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom07">
                                <Form.Label column="sm">Area</Form.Label>
                                <Form.Control type="text" placeholder="enter your area" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Modal.Footer>
                    <Button variant="dark" className='px-5 py-2' onClick={handleClose}> Save Address </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Address
