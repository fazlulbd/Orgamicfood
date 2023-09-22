import React from 'react'
import { Card, Col } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
    const { image, name, price, rating, offer, delprice } = item
    return (
        <Col lg={3} className='mt-4'>
            <Link to={`/product/${item.id}`}>
            <Card>
                <div className="product">
                <p className='new_btn'>{offer}</p>
                <Card.Img variant="top" src={image} />
                </div>
                <Card.Body className='product_text'>
                    <h6>{name}</h6>
                    <div className="d-flex justify-content-between">
                        <h4>${price.toFixed(2)}</h4>
                        <del><h5>${delprice.toFixed(2)}</h5></del>
                    </div>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit = {false}
                    />
                </Card.Body>
            </Card>
            </Link>
        </Col>
    )
}

export default Product
