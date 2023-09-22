import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import choose1 from '../assets/images/choos1.png'
import choose2 from '../assets/images/choos2.png'
import choose3 from '../assets/images/choos3.png'

const chooseData = [
    {
        id: 1,
        image: choose1,
        heading: "All Kind Brand",
        sub_heading: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
    },
    {
        id: 2,
        image: choose2,
        heading: "Curated Products",
        sub_heading: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
    },
    {
        id: 3,
        image: choose3,
        heading: "Pesticide Free Goods",
        sub_heading: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
    },
]
const ChooseUs = () => {
    return (
        <div className='about_choose'>
            <Container>
                <div className="about_choose_heading">
                    <h6> features </h6>
                    <h1>Why Choose Us.</h1>
                </div>
                <Row>
                    {
                        chooseData.map(item => (
                            <Col key={item.id} lg={4}>
                                <div className="about_choose_item ">
                                    <div className='d-flex'>
                                        <Image src={item.image} />
                                        <h3 className='d-flex align-items-center'>{item.heading}</h3>
                                    </div>
                                    <p>{item.sub_heading}</p>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </div>
    )
}

export default ChooseUs

