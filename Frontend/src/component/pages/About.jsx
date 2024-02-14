import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './About.css'
const About = () => {
  return (
    <React.Fragment>
     <div className="container">
     <div className="row">
        <div className="col-md-6 mt-5 left-section">
         <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="col-md-6 mt-5 right-section">
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed soluta porro at neque. Repudiandae, labore suscipit. Qui veritatis quis autem nihil doloremque quibusdam quasi iusto minus, optio totam, quaerat ab!</p>
            <a href="">Get Coupons <FaArrowRight /> </a>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default About
