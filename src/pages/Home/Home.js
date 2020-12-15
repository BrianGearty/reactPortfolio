import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "../Home/home.css"



const Home = () => {
    return (
        <div className="jumbotron full-bg-size bg-dim">
        <Container fluid className="homeWrapper">
            <Row>
                <div>
                    <Col size="lg-12">
                        <div>
                            <div className='homeCard-body'>
                                <div className="homeTextDiv">
                                <div className="homeTitle">Web Developer & Session Musician</div>
                                    <p className="homeText">I am a bass player and session musician providing services to artists, bands, television productions, and educational institutions. I studied at The Collective School of Music in New York City under some of the worlds top session musicians. I have backed many different touring artists spanning countless genres including; Dana Fuchs, Nicole Atkins, Eric Lindell, Gedeon Luke, Evvie McKinney, Fly By Midnight, Corey Glover and more. </p>
                                    <p className="homeText">Recently, I have been studying at Rutger's Full Stack Coding Bootcamp. I have been working with Javascript, jQuery, HTML, CSS, Handlebars, REST API, React, Node, MySQL, and MongoDB. </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default Home;