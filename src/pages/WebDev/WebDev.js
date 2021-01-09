import React from "react";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../WebDev/WebDev.css";
import data from "../../components/WebDevData/webdev"
import Footer from "../../components/Footer";


const WebDev = () => {
    const fadeRightAnimation = keyframes `${fadeIn}`;
    const FadeRight = styled.div `animation: 2s ${fadeRightAnimation}`

    const fadeInAnimation = keyframes `${fadeIn}`;
    const FadeIn = styled.div `animation: .5s ${fadeInAnimation}`

    return (
        <div className="webDevFade">
        <Container fluid >
            <Row>
                <Col size="lg-12">
                    <CardDeck className='mt-5 mb-5'>
                        {data.map((dev, i) => {
                            return (
                                <div key={i} className="devCards">
                                    <Card.Body>
                                        <CardImg className='devCardImage' src={dev.image} alt={dev.alt}></CardImg>
                                        <div className="devCardStuff">
                                        <FadeRight><Card.Title className="devCardHeader">{dev.name}</Card.Title></FadeRight>
                                        <FadeRight><Card.Text className="devText">{dev.text}</Card.Text></FadeRight>
                                        <FadeRight><button className="project" onClick={(e) => {e.preventDefault(); window.location.href=`${dev.appUrl}`}}>Deploy The App</button></FadeRight>
                                        <FadeRight><button className="project" onClick={(e) => {e.preventDefault(); window.location.href=`${dev.githubUrl}`}}>Github Repository</button></FadeRight>
                                        </div>
                                    </Card.Body>
                                </div>
                            )
                        })}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
        <Footer />
        </div>
    );
};

export default WebDev;