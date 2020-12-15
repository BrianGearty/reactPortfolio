import React from "react";
import { Col, Row, Container} from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Music/music.css";
import data from "../../components/MusicData/musicStuff";


const Music = () => {

    return (
        <Container fluid>
            <Row className="row-divided">
                <Col size="lg-12">
                    <CardDeck className='mt-5 mb-5'>
                        {data.map((artist, i) => {
                            return (
                                <div key={i} className="cards">
                                    <Card.Body>
                                        <CardImg className='cardImage' src={artist.image} alt={artist.alt}></CardImg>
                                        <div className="cardStuff">
                                        <Card.Title className='cardHeader'>{artist.artistName}</Card.Title>
                                        <Card.Text className='cardParagraph'>{artist.text}</Card.Text>
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

export default Music;