import {Component, React} from 'react';
import {FaCode} from 'react-icons/fa';
import {Card, Button, CardGroup, Row, Col} from 'react-bootstrap';
import Project1 from './../../assets/images/Project1.jpg';
import Project2 from './../../assets/images/Project2.jpg';
import './SectionProjects.css';

let Project1Link = "https://github.com/Swapnil07072000/Space-Invader-Game-Space-Battle-Game-";
let Project2Link = "https://github.com/Swapnil07072000/Chat-Application";

class SectionProjects extends Component{
    render(){
        return(
            <section id="Projects" class="Projects">
                <div id="title">
                    <h2><FaCode size="50" color="navy"></FaCode>&nbsp;My Projects</h2>
                </div>
                <div id="projectcard">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Project1} />
                                <Card.Body>
                                <Card.Title><b>Space Battle Game</b></Card.Title>
                                <Card.Text>
                                    Old retro based game with different levels which challenges the player.
                                </Card.Text>
                                <Button variant="primary" href={Project1Link}
                                 target="_blank">Github Repo</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Project2} />
                                <Card.Body>
                                <Card.Title><b>Chat Application</b></Card.Title>
                                <Card.Text>
                                    Web-based Chat Application where the person can have chat, can
                                    create a chat group.
                                </Card.Text>
                                <Button variant="primary" href={Project2Link}
                                 target="_blank">Github Repo</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default SectionProjects;