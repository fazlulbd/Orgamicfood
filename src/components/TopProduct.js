import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { productData } from '../fackData/productData'
import Product from './Product'
const TopProduct = () => {
  return (
    <Container>
      <div className="text-center top-product">
        <h1>Our Products</h1>
        <ul>
          <li><Link>Food & Drinks</Link></li>
          <li><Link>Vegetables</Link></li>
          <li><Link>Dried Foods</Link></li>
          <li><Link>Bread & Cake</Link></li>
          <li><Link>Fish & Meat</Link></li>
        </ul>
      </div>
      <Row>
      {
        productData.map(item=>(
          item.product === "top" &&
          <Product
            key={item.id}
            item = {item}
          />
        ))
      }
      </Row>
    </Container>
  )
}

export default TopProduct
