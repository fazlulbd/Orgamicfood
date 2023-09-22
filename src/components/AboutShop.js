import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import about from '../assets/images/about1.png'
const AboutShop = () => {
    return (
        <div className='about_shop'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="">
                            <Image src={about} className='w-100' />
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex align-items-center'>
                        <div className="about_text ">
                            <div className="about_inner">
                            <h6>Know More About Shop</h6>
                            <h1>Trusted Organic Food Store</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                            <div className="about_inner2">
                                <p>sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>
                                <h4>Jerry Henson</h4>
                                <small>/ Shop Director</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default AboutShop
