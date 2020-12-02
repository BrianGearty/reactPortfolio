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
                <div className="cardDeck">
                <Col size="lg-10">
                    <CardDeck>
                        {data.map((dev, i) => {
                            return (
                                <div key={i} className="cards">
                                    <Card.Body>
                                        <CardImg className='cardImage' src={dev.image} alt={dev.alt}></CardImg>
                                        <div className="devCardStuff">
                                        <Card.Title className="cardHeader">{dev.name}</Card.Title>
                                        <Card.Text className="devText">{dev.text}</Card.Text>
                                        <button className="btn app"     onClick={(e) => {e.preventDefault(); window.location.href=`${dev.appUrl}`}}>Deploy The App</button>
                                        <button className="btn githubBtn"     onClick={(e) => {e.preventDefault(); window.location.href=`${dev.githubUrl}`}}>Github Repository</button>
                                        </div>
                                    </Card.Body>
                                </div>
                            )
                        })}
                    </CardDeck>
                </Col>
                </div>
            </Row>
        </Container>
    );
};

export default WebDev;