import React, { useContext } from 'react'
import ReactStars from "react-rating-stars-component";
import { productData } from '../fackData/productData'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import subBanner from '../assets/images/sub_banner1.jpg'
import { Store } from '../Store';

const ProductDetails = () => {
  const navigate = useNavigate()
  const { pid } = useParams();
  const item = productData.find(item => item.id === parseInt(pid))
  const { image, name, price } = item
  const { cartstate, cartdispatch } = useContext(Store)
  const { cart } = cartstate


  let handleQuantity = (count, quantity) => {
    cartdispatch({ type: 'CART_ADD_PRODUCT', payload: { ...count, quantity } })
  }

  let handleCartProductAdd = (product) => {
    const existingItem = cart.cartItems.find((item) => item.id === product.id)
    const quantity = existingItem ? existingItem.quantity + 1 : 1

    cartdispatch({ type: 'CART_ADD_PRODUCT', payload: { ...product, quantity } })
  }
  let handleBuyProductAdd = (product)=>{
    const existingItem = cart.cartItems.find((item) => item.id === product.id)
    const quantity = existingItem ? existingItem.quantity + 1 : 1

    cartdispatch({ type: 'CART_ADD_PRODUCT', payload: { ...product, quantity } })
    navigate("/checkout")
  }
  return (
    <>
      <div className="bann-slider" style={{ background: `linear-gradient( rgb(7 28 31 / 88%), rgb(7 28 31 / 88%)), url(${subBanner}) no-repeat center / cover ` }}>
        <Container>
          <Row>
            <Col>
              <div className="sub_banners">
                <h6>WELCOME TO OUR COMPANY</h6>
                <h1>Product Details </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='py-5'>
        <Row className='singleproduct'>
          <Col lg={5}>
            <Image src={image} alt="" className='w-100 p-5' />
          </Col>
          <Col lg={7} className='d-flex align-items-center'>
            <div className="py-5 single_text">
              <h3>{name}</h3>
              <div className='d-flex'> <ReactStars
                        count={5}
                        value={item.rating}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit = {false}
                    />
                    <span>|54 review</span></div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores exercitationem modi consequuntur tempora mollitia illo, sit facilis dicta placeat. Minus quidem veritatis in, aspernatur impedit error nisi officiis labore reprehenderit porro maiores exercitationem quae aperiam, repellendus similique, amet officia hic incidunt voluptatibus iure atque. Vel autem non architecto, esse, sit sapiente consectetur voluptas error odit nisi  </p>
              <p>Price: <strong>${price.toFixed(2)}</strong></p>
              <div className="">
                {
                  cart.cartItems.map(count => (
                    count.id === item.id &&
                      <div key={count.id} className="d-flex mb-4" style={{ maxWidth: "180px" }}>
                        <Button variant="outline-secondary" className="px-3 me-2" onClick={() => handleQuantity(count, count.quantity + 1)}>+</Button>
                        <div className="form-outline">
                          <input id="form1" min="0" name="quantity" value={count.quantity} type="number" className="form-control" onChange={() => null} />
                        </div>
                        <Button variant="outline-secondary" className="px-3 ms-2" onClick={() => handleQuantity(count, count.quantity > 1 ? count.quantity - 1 : count.quantity)}>-</Button>
                      </div>
                  ))
                }
              </div>
              <Button onClick={() => handleCartProductAdd(item)} variant="warning" className='button'>Add to Cart</Button>
              <Button onClick={() => handleBuyProductAdd(item)}  className='button' variant="info">Buy now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductDetails
