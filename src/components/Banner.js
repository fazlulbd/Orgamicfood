import React from 'react'
import { bannerData } from '../fackData/bannerData'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <>
       <Carousel>
      {
          bannerData.map(item => (
            <Carousel.Item interval={3000} key={item.id}>
              <div className="bann-slider" style={{ background: `url(${item.image}) no-repeat center / cover ` }}>
               <Container>
               <div className="banner-text"> 
                   <h6>{item.subheading}</h6> 
                  <h1>{item.heading}</h1>               
                  <Link className="dark_btn">{item.button}</Link>
                </div>
               </Container>
              </div>
            </Carousel.Item>
          ))
        }
       </Carousel>
    </>
  )
}

export default Banner
