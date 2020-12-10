import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css"
import data from "../../components/HomeData/HomeData";

const imgUrl = data[0].image;

const backgroundImg = {
    width: '100%',
    height: '1300px',
    backgroundImage: `url(/assets/images/${imgUrl})`,
    backgroundSize: 'cover',
    top: '0',
    left: '0',
    backgroundColor: 'black',
    borderBottom: "5px  black solid",
    borderTop: "5px  black solid"
};


const Home = () => {
    return (
        <div className="home" style={backgroundImg} >
        <Container fluid className="homeWrapper">
            <Row>
                <div>
                    <Col size="lg-12">
                        <div>
                            <Card.Body>
                                <Card.Title className="homeTitle">Web Developer & Session Musician</Card.Title>
                                <Card.Text className="homeTextDiv">
                                    <p className="homeText">I am a bass player and session musician providing services to artists, bands, television productions, and educational institutions. I studied at The Collective School of Music in New York City under some of the worlds top session musicians. I have backed many different touring artists spanning countless genres including; Dana Fuchs, Nicole Atkins, Eric Lindell, Gedeon Luke, Evvie McKinney, Fly By Midnight, Corey Glover and more. </p>
                                    <p className="homeText">Recently, I have been studying at Rutger's Full Stack Coding Bootcamp. I have been working with Javascript, jQuery, HTML, CSS, Handlebars, REST API, React, Node, MySQL, and MongoDB. </p>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default Home;