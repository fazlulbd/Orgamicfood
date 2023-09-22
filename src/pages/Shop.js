import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import subBanner from '../assets/images/sub_banner1.jpg'
import { productData } from '../fackData/productData'
import Product from '../components/Product'
import Sidebar from '../components/Sidebar'
import { AiFillAppstore } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

const Shop = () => {
  return (
    <>
      <div className="bann-slider" style={{ background: `linear-gradient( rgb(7 28 31 / 88%), rgb(7 28 31 / 88%)), url(${subBanner}) no-repeat center / cover ` }}>
        <Container>
          <Row>
            <Col>
              <div className="sub_banners">
                <h6>WELCOME TO OUR COMPANY</h6>
                <h1>Shop</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='shopping my-5'>
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
            <div className="shopping_left">
              <p><AiFillAppstore className='shopping_icon1' /> <HiMenu className='shopping_icon2' /></p>
              <div className="shopping_right">
                <div className=" mx-5">
                  <Form.Select aria-label="Default select example ">
                    <option>Default sorting </option>
                    <option value="1">Sort by popularity</option>
                    <option value="2"> Sort by new arrivals</option>
                    <option value="3">Sort by price: low to high</option>
                    <option value="3">Sort by price: high to low</option>
                  </Form.Select>
                </div>
                <div className="">
                  <Form.Select>
                    <option>12</option>
                    <option value="7">24</option>
                    <option value="8">36</option>
                    <option value="9">48</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            <Row>
              {
                productData.map(item => (
                  <Product
                    key={item.id}
                    item={item}
                  />
                ))
              }
            </Row>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Shop
