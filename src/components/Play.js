import React from 'react'
import { Container } from 'react-bootstrap'
import img from "../assets/images/blog3.jpg"
import { FaPlay } from 'react-icons/fa';
const Play = () => {
  return (
    <Container>
     <div className="play">
     <div className="play_item" style={{ background: `url(${img}) no-repeat center / cover ` }}>
        <div className="play-icon">
          <h4><FaPlay/></h4>
        </div>
       </div>
     </div>
    </Container>
  )
}

export default Play
