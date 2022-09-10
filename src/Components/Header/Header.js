import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import  {Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import {FaNodeJs} from 'react-icons/fa';  
import './Header.css';

$(document).ready(function(){
    $('.link').click(function(){
        $('.link').removeClass("active");
        $(this).addClass("active");
    });
});

class Header extends Component{
    render(){
        return (
            <Navbar collapseOnSelect fixed="top" expand="sm" id="navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav id="top">
                            <NavbarBrand>
                                <FaNodeJs size="50" className="icon"></FaNodeJs>
                            </NavbarBrand>
                            <Nav.Link href="#Home"  className="link active">Home</Nav.Link>
                            <Nav.Link href="#AboutUs" className="link" >About</Nav.Link>
                            <Nav.Link href="#Education" className="link">Education</Nav.Link>
                            <Nav.Link href="#Projects" className="link">Projects</Nav.Link>
                            <Nav.Link href="#Contacts" className="link">Contacts</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>                    
            </Navbar>
        );
    }
}

export default Header;