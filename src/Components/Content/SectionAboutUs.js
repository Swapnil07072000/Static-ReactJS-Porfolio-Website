import React, { Component } from "react";
import {FaUserAlt, FaChevronRight} from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SectionAboutUs.css';
import Image1 from './../../assets/images/HomeImage.jpg';

function Age(){
    const date = 2000;
    const curr_year = new Date().getFullYear();

    return (curr_year-date);
}

class SectionAboutUs extends Component{
    render(){
        return (
            <section  id="AboutUs" className="AboutUs">
                <Container>
                    <Row>
                        <Col><h2 class="head"><FaUserAlt color="navy"></FaUserAlt>&nbsp;About<span>&nbsp;Me</span></h2></Col>
                    </Row>
                </Container>
                <br/>
                <Container id="Name">
                    <Row>
                        <Col>
                            <input id="Image" type="image" img src={process.env.PUBLIC_URL+Image1} alt="Image not Found"/>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <div id="text">
                                    <h3 class="Name">I'm <b>Swapnil Pawar</b></h3>
                                    <span>Fresher</span>
                                    <br/><br/>
                                    <p id="myinfo">  
                                        I am recent Graduate from MU in the course of
                                        BSc-IT 2021 batch. Ready to start my career in IT.
                                        Quick learner and highly adaptable. Done 2 interships in Web Developement.
                                        Currently Pursuing Master's from MU.
                                    </p>
                                    <Row>
                                        <Col>  
                                            <table id="table1">
                                                <tr>
                                                    <td>
                                                        <p><span> <b> Age : </b> </span> <Age/> </p>
                                                    </td>
                                                    <td>
                                                        <p><span> <b> Email : </b> </span> swapniluttampawar2007@gmail.com</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span> <b> Phone : </b> </span> +91 9137609330 </p>
                                                    </td>
                                                    <td>
                                                        <p><span> <b> Place : </b> </span> Mumbai - 400055, India </p>
                                                    </td>
                                                </tr>
                                            </table> 
                                            <div class="resumebtn">
                                                <a href="/" class="btn"><span>Resume</span>
                                                    <FaChevronRight></FaChevronRight>
                                                </a>
                                            </div>  
                                        </Col>
                                    </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
            </section>
        );
    }
}

export default SectionAboutUs;