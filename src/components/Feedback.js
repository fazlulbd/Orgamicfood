import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { feedbackData } from '../fackData/feedbackData'

const Feedback = () => {
  return (
    <Container fluid className='feedback'>
      <h1>Clients Feedbacks.</h1>
      <Row className='feedback-item'>
        {
          feedbackData.map(item =>(
            <Col key={item.id} lg={4}>
              <div className="feedback-inner d-flex justify-content-between">
                <div className="feedback-img">
                  <Image src={item.image} className='w-100'/>
                </div>
                <div className="feedback-text">
                  <p>{item.description}</p>
                  <h4>{item.name}</h4>
                  <h6>{item.company}</h6>
                </div>
              </div>
            </Col>
          ))
        }

      </Row>
    </Container>
  )
}

export default Feedback
