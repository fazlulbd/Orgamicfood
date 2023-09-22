import React from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import subBanner from '../assets/images/sub_banner1.jpg'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="bann-slider" style={{ background: `linear-gradient( rgb(7 28 31 / 88%), rgb(7 28 31 / 88%)), url(${subBanner}) no-repeat center / cover ` }}>
                <Container>
                    <div className="sub_banners">
                        <h6>WELCOME TO OUR COMPANY</h6>
                        <h1>Account</h1>
                    </div>
                </Container>
            </div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg={4}>
                        <div className="login mt-5">
                            <h2>Sign In To Your Account</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="dark" type="submit"> Submit </Button>
                                <div className="login-text">
                                <Form.Text className="text-muted">
                                  Don't have an Account? <Link to='/registration'> Sign up</Link>
                                </Form.Text>
                                </div>
                                <div className="login-text">
                                <Form.Text className="text-muted">
                                     Forgot your password ?
                                </Form.Text>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
