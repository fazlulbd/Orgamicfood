import React from 'react'
import img from '../assets/images/sub_banner.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const subBanner = {
    image: img,
    subheading: "Todays Hot Deals",
    heading: "Original Stock Honey Combo Package",
    button: "Shop now",
}
const SubBanner = () => {
    return (
        <div className="sub_banner">
            <Container>
                <Row>
                    <Col lg={5}>
                        <Image src={subBanner.image} className='w-100' />
                    </Col>
                    <Col lg={7}>
                        <div className="sub_banner_text">
                            <h6>{subBanner.subheading}</h6>
                            <h1>{subBanner.heading}</h1>
                            <div className="sub_banner_date">
                                <div className="sub_banner_item">
                                    <div className="single_date">
                                        <h2>484</h2>
                                        <p>days</p>
                                    </div>
                                    <div className="single_date">
                                        <h2>07</h2>
                                        <p>hrs</p>
                                    </div>
                                    <div className="single_date">
                                        <h2>17</h2>
                                        <p>mins</p>
                                    </div>
                                    <div className="single_date">
                                        <h2>54</h2>
                                        <p>secs</p>
                                    </div>
                                </div>
                            </div>
                            <Link>{subBanner.button}</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubBanner
