import React from "react";
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardImg, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Music/music.css";
import data from "../../components/MusicData/musicStuff";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading/loading";


const Music = () => {
    const fadeRightAnimation = keyframes`${fadeIn}`;
    const FadeRight = styled.div`animation: 1s ${fadeRightAnimation}`
    return (
        <div className="musicPage">
            <Container fluid>
                <Row className="row-divided">
                    <Col size="lg-12">
                        <CardDeck className='mt-5 mb-5'>
                            {data.map((artist, i) => {
                                return (
                                    <div key={i} className="cards">
                                        <Card.Body>
                                            <LazyLoad once height="100%" placeholder={<Loading />}>
                                                <div className="imgDiv">
                                                    <CardImg className='cardImage' src={artist.image} alt={artist.alt}></CardImg>
                                                    <div className="middle">
                                                        <div className="text">{artist.hover}</div>
                                                    </div>
                                                </div>
                                                <div className="cardStuff">
                                                    <FadeRight><Card.Title className='cardHeader'>{artist.artistName}</Card.Title></FadeRight>
                                                    <FadeRight><Card.Text className='cardParagraph'>{artist.text}</Card.Text></FadeRight>
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
            <Footer />
        </div>
    );
};

export default Music;