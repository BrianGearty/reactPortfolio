import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../components/WebDevData/webdev"
import "../WebDev/WebDev.css";




const WebDev = () => {

    return (
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
                                        <Card.Title className="devCardHeader">{dev.name}</Card.Title>
                                        <Card.Text className="devText">{dev.text}</Card.Text>
                                        <button className="project"     onClick={(e) => {e.preventDefault(); window.location.href=`${dev.appUrl}`}}>Deploy The App</button>
                                        <button className="project"     onClick={(e) => {e.preventDefault(); window.location.href=`${dev.githubUrl}`}}>Github Repository</button>
                                        </div>
                                    </Card.Body>
                                </div>
                            )
                        })}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default WebDev;