import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import footer1 from '../assets/images/footer1.png'
import footer2 from '../assets/images/footer2.png'
import footer3 from '../assets/images/footer3.png'
import footer4 from '../assets/images/footer4.png'
import logo from '../assets/images/logo.png'
import payment from '../assets/images/payment-1.png'
import { CiLocationOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
const footerData = [
    {
        id: 1,
        image: footer1,
        header: "Curated Products",
        describe: "Provide Curated Products for all product over $100"
    },
    {
        id: 2,
        image: footer2,
        header: "Handmade",
        describe: "We ensure the product quality that is our main goal"
    },
    {
        id: 3,
        image: footer3,
        header: "Natural Food",
        describe: "Return product within 3 days for any product you buy"
    },
    {
        id: 4,
        image: footer4,
        header: "Free home delivery",
        describe: "We ensure the product quality that you can trust easily"
    },

]
console.log(footerData)
const Footer = () => {
    return (
        <>
        <Container fluid className='footer'>
            <div className="footer-heading">
                <Row>
                    {
                        footerData.map(item => (
                            <Col key={item.id} lg={3}>
                                <div className="footer_item">
                                    <div className="footer_img d-flex align-items-center">
                                        <Image src={item.image} className='w-100' />
                                    </div>
                                    <div className="footer_text">
                                        <h4>{item.header}</h4>
                                        <p>{item.describe}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
            <div className="footer-bottom">
                <Row>
                    <Col lg={3}>
                        <div className="footer_item1">
                            <Image src={logo} />
                            <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                            <ul className='footer_inner'>
                                <li><span><CiLocationOn /></span> Brooklyn, New York, United States</li>
                                <li><span><FiPhoneCall /></span> +0123-456789</li>
                                <li><span><AiOutlineMail /></span> example@example.com</li>
                            </ul>
                            <ul className='footer_inner2'>
                                <li><BsFacebook /></li>
                                <li><BsTwitter /></li>
                                <li><AiFillLinkedin /></li>
                                <li><AiFillYoutube /></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer_item2">
                            <h4>Company</h4>
                            <ul>
                                <li>About</li>
                                <li>Blog</li>
                                <li>All Products</li>
                                <li>Locations Map</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer_item3">
                            <h4>Services.</h4>
                            <ul>
                                <li>Order tracking</li>
                                <li>Wish List</li>
                                <li>My account</li>
                                <li>Terms & Conditions</li>
                                <li>Promotional Offers</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer_item4">
                            <h4>Customer Care</h4>
                            <ul>
                                <li>Login</li>
                                <li>My account</li>
                                <li>Wish List</li>
                                <li>Order tracking</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="footer_item5">
                            <h4>Newsletter</h4>
                            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                            <Form className='d-flex footer_inner'>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Button variant="success" type="submit" className='px-4'>
                                    Submit
                                </Button>
                            </Form>
                            <div className="footer_payment">
                                <h4>We Accept</h4>
                                <Image src={payment} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        <div className="text-center py-4 bg-dark text-white" >
            <h5>All Rights Reserved  &copy; Company 2023 </h5>
        </div>
        </>
    )
}

export default Footer
