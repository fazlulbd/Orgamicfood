import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import subBanner from '../assets/images/sub_banner1.jpg'
import contact1 from "../assets/images/contact1.png"
import contact2 from "../assets/images/contact2.png"
import contact3 from "../assets/images/contact3.png"
import ContactFrom from '../components/ContactFrom'
const contactData=[
    {
        id: 1,
        image: contact1,
        name: "Email Address",
        address1: "example@example.com",
        address2: "example@gmail.com"
    },
    {
        id: 2,
        image: contact2,
        name: "Phone Number",
        address1: "+0123-456789 ",
        address2: "+0123-456789 "
    },
    {
        id: 3,
        image: contact3,
        name: "Phone Number",
        address1: "18/A, New Born Town Hall ",
        address2: "New York, US"
    },
]
const Contact = () => {
  return (
    <>
       <div className="bann-slider" style={{ background: `linear-gradient( rgb(7 28 31 / 88%), rgb(7 28 31 / 88%)), url(${subBanner}) no-repeat center / cover ` }}>
         <Container>
            <div className="sub_banners">
            <h6>WELCOME TO OUR COMPANY</h6>
            <h1>Contact Us</h1>
            </div>
         </Container>
        </div>
        <div className="contact">
            <Container>
                <Row>
                    {
                        contactData.map(item =>(
                            <Col key={item.id} lg={4}>
                                <div className="contact_wrapper">
                                    <div className="contact_img">
                                        <Image src={item.image}/>
                                    </div>
                                    <div className="contact_text">
                                        <h3>{item.name}</h3>
                                        <p>{item.address1}</p>
                                        <p>{item.address2}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                   
                </Row>
            </Container>
        </div>
        <Container>
            <div className='contact_from'>
                <ContactFrom/>
            </div>
        </Container>
        <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1075.8694003732285!2d91.85923827053138!3d24.90552271247988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1695235919361!5m2!1sen!2sbd" style={{ width:"100%", height:"500px", border:0}}></iframe>
        </div>
    </>
  )
}

export default Contact
