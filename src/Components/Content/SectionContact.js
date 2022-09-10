import React, { Component } from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SectionContact.css';
import 'font-awesome/css/font-awesome.min.css';
import {FaHeadset, FaPaperPlane} from 'react-icons/fa';
import ContactUs from './../../assets/images/ContactUs.jpg';


class SectionContact extends Component{
    render(){
        return(
            <section id="Contacts" class="Contacts">
                <div id="title">
                    <h2><FaHeadset color="blue"></FaHeadset>&nbsp;Get in<span>&nbsp;Touch</span></h2>
                </div>
                    <Container id="content">
                        <Row>
                        <Col>
                            <input type="image" img id="image" src={ContactUs} alt="Image Not Found"/>
                        </Col>
                        <Col>
                        <div>
                            <Form id="form1">
                                <Form.Group>
                                    <Form.Control type="text" id="fname" placeholder="First Name"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" id="lname" placeholder="Last Name"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" id="email" placeholder="Email"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" id="phoneno" placeholder="Phone No."></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control  as="textarea" id="txtarea" placeholder="Subject"></Form.Control>
                                </Form.Group>
                                <Button type="submit" variant="primary">Submit <FaPaperPlane></FaPaperPlane></Button>
                            </Form>
                        </div>
                        </Col>
                        </Row>  
                    </Container>
            </section>
        );
    }
}

export default SectionContact;