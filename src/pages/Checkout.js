import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../Store'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import subBanner from '../assets/images/sub_banner1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Address from '../components/Address'

const Checkout = () => {
    const navigate = useNavigate()
    const { cartstate, cartdispatch } = useContext(Store)
    const { cart } = cartstate
    let [total, setTotal] = useState('')
    let [shipping, setShipping] = useState('')

    let handleRemoveCart = (item) => {
        cartdispatch({ type: 'CART_REMOVE_PRODUCT', payload: item })
    }
    let handleClearCart = () => {
        cartdispatch({ type: 'CLEAR_CART' })
    }
    let handlePlaceOrder = () => {
        cartdispatch({ type: 'CLEAR_CART' })
        navigate("/")
    }
    useEffect(() => {
        let price = 0
        cart.cartItems.map(item => {
            price += item.price * item.quantity
        })
        setTotal(price)
        if (price < 600) {
            setShipping(40)
        } else if (price > 600) {
            setShipping(30)
        } else {
            setShipping(0)
        }

    }, [cart.cartItems])




    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let handleInfo = () => {
        setShow(true);
    }
    return (
        <>
            <div className="bann-slider" style={{ background: `linear-gradient( rgb(7 28 31 / 88%), rgb(7 28 31 / 88%)), url(${subBanner}) no-repeat center / cover ` }}>
                <Container>
                    <div className="sub_banners">
                        <h6>WELCOME TO OUR COMPANY</h6>
                        <h1>Cart</h1>
                    </div>
                </Container>
            </div>
            {
                cart.cartItems.length > 0 ?
                    <section className="h-100 gradient-custom">
                        <div className="container py-5">
                            <div className="row d-flex justify-content-center my-4">
                                <div className="col-md-8">
                                    <div className="card mb-4">
                                        <div className="card-header py-3">
                                            <Button onClick={handleInfo} variant="light" className="mb-0 text-center"> Add Information </Button>
                                            <Address
                                                show={show}
                                                handleClose={handleClose}
                                            />
                                        </div>
                                        <div className="card-body">
                                            {
                                                cart.cartItems.map(item => (
                                                    <div className="row" key={item.id}>
                                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                                <Link to={`/product/${item.id}`}>
                                                                    <img src={item.image} className="w-100" alt="Blue Jeans Jacket" />
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

                                                            <p><strong>{item.name}</strong></p>
                                                            {/* style={{width: '15px', height: '15px', borderRadius:'50%', background: `#${item}`, display:"inline-block", margin:'-10px 3px'}} */}
                                                            <p>Quentity: {item.quantity}</p>
                                                            <p>Tk: <strong>{(item.price)}</strong></p>

                                                            <Button className="btn btn-danger btn-sm me-1 my-2 px-5" onClick={() => handleRemoveCart(item)}> Remove </Button>
                                                        </div>

                                                        <hr className="my-4" />
                                                    </div>
                                                ))
                                            }
                                            <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button> {' '}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <div className="card-header py-3">
                                            <h5 className="mb-0">Summary</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="input-from px-4 py-3">
                                                <Form className='d-flex cart_form'>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control type="text" placeholder="Enter Voucher Code" />
                                                    </Form.Group>
                                                    <Button variant="info" type="submit">Apply</Button>
                                                </Form>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                    Products
                                                    <span>Tk: {total}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                    Shipping
                                                    <span>{shipping}</span>
                                                </li>
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                    <div>
                                                        <strong>Total amount</strong>
                                                        <strong>
                                                            <p className="mb-0">(including VAT)</p>
                                                        </strong>
                                                    </div>
                                                    <span><strong>Tk: {total + shipping}</strong></span>
                                                </li>
                                            </ul>
                                            <Button onClick={handlePlaceOrder} type="button" variant="dark" className="cart_button">Place order</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                : navigate("/")
            }

        </>
    )
}

export default Checkout
