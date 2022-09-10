import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {FaPhone, FaMapMarkedAlt, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';
import './Footer.css';

class Footer extends Component {
    render(){
  return (
    <footer id="footer" class="footer">
      <Container>
        <Row>
          <Col>
            <div id="title">
              <h2>Swapnil Pawar</h2>
              <p>
                Thank you visiting my personal Portfolio website.
                Connect with me on social 
              </p>
            </div>
          </Col>
          <Col>
            <div id="quicklinks">
              <h4> Quick Links </h4>
              <Row>
                <Col>
                <ul>
                <li> Home </li>
                <li> About Us </li>
                <li> Education </li>
                </ul>
                </Col>
                <Col>
                <ul>
                <li> Projects </li>
                <li> Get in Touch </li>
                </ul>
                </Col>
              </Row> 
            </div>
          </Col>
          <Col>
            <div id="contactinfo">
              <h4>Contact Info</h4>
              <p><FaPhone color="white"></FaPhone>&nbsp;&nbsp;+91 9137609330</p>
              <p><FaMapMarkedAlt color="white"></FaMapMarkedAlt>&nbsp;&nbsp;Mumbai - 400055, India</p>
              <p><FaEnvelope color="white"></FaEnvelope>&nbsp;&nbsp;swapniluttampawar2007@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
        <hr></hr> 
        <div id="footericon">
          <a  href="https://www.linkedin.com/in/swapnil-pawar-07/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin id="linkedin" size={40} color="black"></FaLinkedin></a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a id="github" href="https://github.com/Swapnil07072000" target="_blank" rel="noopener noreferrer">
          <FaGithub id="github" size={40} color="black"></FaGithub></a>
        </div>   
        <div id="copyright">
          &copy; Created By Swapnil Pawar
        </div>
    </footer>
  );
    }
}

export default Footer;