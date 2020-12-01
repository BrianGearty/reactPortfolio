import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../components/WebDevData/webdev"
import "./style.css";


const WebDev = () => {
    return (
        <Container fluid >
            <Row>
                <div className="cardDeck">
                <Col size="lg-8">
                    <CardDeck>
                        {data.map((dev, i) => {
                            return (
                                <div key={i} className="cards">
                                    <Card.Body>
                                        <CardImg className='cardImage' src={dev.image} alt={dev.alt}></CardImg>
                                        <Card.Title className="cardHeader" >{dev.name}</Card.Title>
                                        <Card.Text>
                                            <p className="cardText">{dev.text}</p>
                                        </Card.Text>
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