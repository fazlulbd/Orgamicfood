import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { teamData } from '../fackData/teamData'
const Team = () => {
  return (
    <div className="about_team">
      <Container>
        <div className="">
          <h1>Team Member</h1>
        </div>
        <Row>
          {
            teamData.map(item => (
              <Col lg={3}>
                <div className="">
                  <div className="">
                    <Image src={item.image} className='w-100'/>
                  </div>
                  <div className="about_team_text">
                    <h6>{item.company}</h6>
                    <h4>{item.name}</h4>
                  </div>
                </div>
              </Col>
            ))
          }

        </Row>
      </Container>
    </div>
  )
}

export default Team
