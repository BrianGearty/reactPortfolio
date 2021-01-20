import React from "react";
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../WebDev/WebDev.css";
import data from "../../components/WebDevData/webdev"
import Footer from "../../components/Footer";
import Loading from "../../components/Loading/loading";


const WebDev = () => {
    const fadeRightAnimation = keyframes `${fadeIn}`;
    const FadeRight = styled.div `animation: 2s ${fadeRightAnimation}`

//   `  // const fadeInAnimation = keyframes `${fadeIn}`;
//     // const FadeIn = styled.div `animation: .5s ${fadeInAnimation}`
// `
    return (
        <div className="webDevPage">
        <Container fluid >
            <Row>
                <Col size="lg-12">
                    <CardDeck className='mt-5 mb-5'>
                        {data.map((dev, i) => {
                            return (
                                <div key={i} className="devCards">
                                    <Card.Body>
                                        <LazyLoad once height="100%" placeholder={<Loading />}>
                                        <CardImg className='devCardImage' src={dev.image} alt={dev.alt}></CardImg>
                                        <div className="devCardStuff">
                                        <FadeRight><Card.Title className="devCardHeader">{dev.name}</Card.Title></FadeRight>
                                        <FadeRight><Card.Text className="devText">{dev.text}</Card.Text></FadeRight>
                                        <FadeRight><a href={dev.appUrl}><button className="project">Deploy The App</button></a></FadeRight>
                                        <FadeRight><a href={dev.githubUrl}><button className="project">Github Repository</button></a></FadeRight>
                                        </div>
                                        </LazyLoad>
                                    </Card.Body>
                                </div>
                            )
                        })}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Footer />
        </div>
    );

};

export default WebDev;