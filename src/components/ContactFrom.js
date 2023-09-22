import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

const ContactFrom = () => {
    return (
        <>
         <Form className='p-5'>
         <h3>Get A Quote</h3>
            <Row className='from_wrapper'>
                <Col lg={6}>
                    <Form.Group className="mb-4" controlId="validationCustomUsername">
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email address" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4" controlId="validationCustom03">
                        <Form.Select aria-label="Default select example">
                        <option>Select Service Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4" controlId="validationCustom05">
                        <Form.Control type="number" placeholder="Enter phone number" />
                    </Form.Group>
                </Col>
                <Col lg={12}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={6} placeholder="Enter Messages" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className='checkbox' type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." />
            </Form.Group>
            <Button className='contact_button' variant="light">Get an free service</Button>
        </Form>
        </>
       
    )
}

export default ContactFrom
