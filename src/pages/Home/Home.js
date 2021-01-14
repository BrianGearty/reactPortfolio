import React from "react";
import styled, { keyframes } from 'styled-components';
import { zoomIn} from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import "../Home/home.css"



const Home = () => {
    const fadeUpAnimation = keyframes`${zoomIn}`;
    const FadeUp = styled.div `animation: 1s ${fadeUpAnimation};`;

    return (
        <div className="imgWrapper">
        <div className="backgroundImg">
        <Container fluid className="homeWrapper">
            <Row>
                <div>
                    <Col size="lg-12">
                        <div>
                            <div className='homeCard-body'>
                                <div className="homeTextDiv">
                                <FadeUp><div className="homeTitle">Web Developer & Session Musician</div></FadeUp>
                                    <FadeUp><p className="homeText">I am a bass player and session musician providing services to artists, bands, television productions, and educational institutions. I studied at The Collective School of Music in New York City under some of the worlds top session musicians. I have backed many different touring artists spanning countless genres including; Dana Fuchs, Nicole Atkins, Eric Lindell, Gedeon Luke, Evvie McKinney, Fly By Midnight, Corey Glover and more. </p></FadeUp>
                                    <FadeUp><p className="homeText">As of December 2020 I am a graduate and certificate recipient from Rutgers University's Full Stack Coding Bootcamp. I am thoroughly versed in all aspects of Full Stack Development including; Javascript, jQuery, HTML, CSS, Handlebars, REST API, JSON, React, Node, MySQL, and MongoDB. One of my greatest strengths as a developer is being a great communicator. Working as a session musician for the past decade has taught me how to collaboratively create as a team player and address problems in an effective, professional manner affirming the task at hand.</p></FadeUp>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
        </div>
        </div>
    );
};

export default Home;