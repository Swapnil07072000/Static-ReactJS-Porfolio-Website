import React, { Component } from "react";
import {FaGraduationCap} from 'react-icons/fa';
import './SectionMyEducation.css';
import { Container, Row, Col } from "react-bootstrap";
import CollegeImage from './../../assets/images/College-Image.jpg';

class SectionMyEducation extends Component{
    render(){
        return (
            <section id="Education" class="Education">
                <div id="title">
                    <h2><FaGraduationCap color="black" size="50"></FaGraduationCap>&nbsp;My Education</h2>
                </div>
                    <Container id="content">
                        <Row id="row">
                            <input className="icon" type="image" img src={CollegeImage} alt="Image not found" width="200" height="120" />
                            <Col>
                                <div class="info">
                                    <h3>Master of Science in Information Technology&nbsp;&nbsp;&nbsp;</h3>
                                    <p>M.L. Dahanukar College of Commerce | MU</p>
                                    <h4>2021-2023 | Pursuing</h4>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row id="row">
                            <input className="icon" type="image" img src={CollegeImage} alt="Image not found" width="200" height="120"/>
                            <Col>
                                <div class="info">
                                    <h3>Bachelor of Science in Information Technology</h3>
                                    <p>M.L. Dahanukar College of Commerce | MU</p>
                                    <h4>2018-2021 | Completed</h4>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row id="row">   
                            <input className="icon" type="image" img src={CollegeImage} alt="Image not found" width="200" height="120"/>
                            <Col>
                                <div class="info">
                                    <h3>HSC</h3>
                                    <p>Patuck Jr. College | MU</p>
                                    <h4>2016-2018 | Completed</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                
            </section>
        );
    }
}

export default SectionMyEducation;