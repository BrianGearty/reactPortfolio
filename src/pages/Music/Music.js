import React from "react";
import { Col, Row, Container} from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import data from "../../components/MusicData/musicStuff";


const Music = () => {

    return (
        <Container fluid>
            <Row>
                <div className="cardDeck">
                <Col size="lg-12">
                    <CardDeck>
                        {data.map((artist, i) => {
                            return (
                                <div key={i} className="cards">
                                    <Card.Body>
                                        <CardImg className='cardImage' src={artist.image} alt={artist.alt}></CardImg>
                                        <div className="cardText">
                                        <Card.Title><h3 className='cardHeader'>{artist.artistName}</h3></Card.Title>
                                        <Card.Text className='cardParagraph'>{artist.text}</Card.Text>
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

export default Music;