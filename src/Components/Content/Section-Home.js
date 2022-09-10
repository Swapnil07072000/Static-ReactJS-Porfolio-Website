import React, { Component} from "react";
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import './Section-Home.css';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed';
import {FaArrowAltCircleDown, FaLinkedin, FaGithub} from 'react-icons/fa';
//import HomeImage from './../../assets/images/HomeImage.jpg';



class SectionHome extends Component{
    render(){
            const particlesInit = async (main) => {
                console.log(main);
                await loadFull(main);
            };
        
            const particlesLoaded = (container) => {
                console.log(container);
            };
          return (    
                <section id="Home">
                    <div>
                    <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                            value: "#fdfefe",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#5DADE2",
                            },
                            links: {
                                color: "#000000",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                            default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 700,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                        },
                        detectRetina: true,
                        fullScreen:{
                            enable: false,
                        }
                    }}
                    ></Particles>
                    <Name/>
                    </div>
                </section>
          );
    }
}

function Name(){
    return (
            <Container id="content" fluid>
                <Row>
                    <Col>
                        <h2><b>Hi</b> There,<br/> I'm <span> Swapnil Pawar </span></h2>
                        <p>I am Into &nbsp; <p id="typedtext">
                        <Typed 
                        strings={['Frontend Developement','Backend Development', 
                                'Web Development', 'Mobile Development']} 
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                         /></p>
                         </p>
                         <a href="#AboutUs" className="about"><span>About Me</span>&nbsp;
                            <FaArrowAltCircleDown size={20}></FaArrowAltCircleDown>
                        </a>
                        <div id="social">
                            <br/>
                            <Row>
                                <Col>
                                    <a href="https://www.linkedin.com/in/swapnil-pawar-07/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={40}></FaLinkedin></a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://github.com/Swapnil07072000" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={40}></FaGithub></a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
    );
}

export default SectionHome; 