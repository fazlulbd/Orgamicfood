import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { featuredData } from '../fackData/featuredData'
const Feature = () => {
    return (
        <Container className='featured'>
            <Row>
                <Col lg={6}>
                    {
                        featuredData.map(item => (
                            item.position === "left" &&
                            <div className="featured_left" key={item.id}>
                                <Image src={item.image} className='w-100' />
                            </div>
                        ))
                    }
                </Col>
                <Col lg={6}>
                    {
                        featuredData.map(item => (
                            item.position === "right" &&
                            <div className="featured_right" key={item.id}>
                                <Image src={item.image} className='w-100' />
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Feature
