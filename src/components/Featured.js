import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { productData } from '../fackData/productData'
import ReactStars from "react-rating-stars-component";
const Featured = () => {

    return (
        <Container>
            <div className="text-center featured_product">
                <h1>Featured Products</h1>
            </div>
            <Row>
                {
                    productData.map(item => (
                        item.product === "featured" &&
                        <Col lg={3} className='mt-4'>
                            <Card>
                                <div className="product">
                                    <p className='new_btn'>{item.offer}</p>
                                    <Card.Img variant="top" src={item.image} />
                                </div>
                                <Card.Body className='product_text'>
                                    <h6>{item.name}</h6>
                                    <div className="d-flex justify-content-between">
                                        <h4>${(item.price).toFixed(2)}</h4>
                                        <del><h5>${(item.delprice).toFixed(2)}</h5></del>
                                    </div>
                                    <ReactStars
                                        count={5}
                                        value={item.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                        isHalf={true}
                                        edit={false}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Featured
