import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { blogData } from '../fackData/blogData'
import { FaRegUser, FaTags } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
const Blog = () => {
  return (
    <Container className='blog'>
      <h1>Leatest Blog</h1>
       <Row>
        {
          blogData.map(item =>(
            <Col key={item.id} lg={4}>
              <div className="blog_item">
                <div className="blog_img">
                  <Image src={item.image} className='w-100'/>
                </div>
                <div className="blog_text">
                  <div className="blog_heading">
                  <ul>
                    <li><span><FaRegUser/></span> {item.user}</li>
                    <li><span><FaTags/></span> {item.service}</li>
                  </ul>
                  </div>
                  <h3>{item.name}</h3>
                  <hr />
                  <div className="blog-footer">
                    <ul>
                      <li> <span><BiCalendar/></span>{item.date}</li>
                      <li>{item.button}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          ))
        }
       
       </Row>
    </Container>
  )
}

export default Blog
