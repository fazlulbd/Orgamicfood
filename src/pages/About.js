import React from 'react'
import subBanner from '../assets/images/sub_banner1.jpg'
import { Container } from 'react-bootstrap'
import Feedback from '../components/Feedback'
import AboutShop from '../components/AboutShop'
import Blog from '../components/Blog'
import Team from '../components/Team'
import ChooseUs from '../components/ChooseUs'
const About = () => {
  return (
    <>
        <div className="bann-slider" style={{ background: `linear-gradient( rgb(7 28 31 / 88%), rgb(7 28 31 / 88%)), url(${subBanner}) no-repeat center / cover ` }}>
         <Container>
            <div className="sub_banners">
            <h6>WELCOME TO OUR COMPANY</h6>
            <h1>About Us</h1>
            </div>
         </Container>
        </div>
        <AboutShop/>
        <ChooseUs/>
        <Team/>
        <Feedback/>
        <Blog/>
    </>
  )
}

export default About
