import React from "react";
import { Col, Row, Container } from "../components/Grid";
import {Card} from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="lg-6">
                    <Card className="mb-3">
                        <Card.Body>
                        <Card.Title>Web Developer & Session Musician</Card.Title>
                        <Card.Text> 
                            <p> I am a bass player and session musician providing services to artists, bands, television productions, and educational institutions. I studied at The Collective School of Music in New York City under some of the worlds top session musicians. I am proficient in musical styles such as; Funk, RnB, Soul, Hip Hop, Rock, Pop, Jazz, and Reggae. I have backed many different touring artists spanning countless genres including; Dana Fuchs, Nicole Atkins, Eric Lindell, Gedeon Luke, Evvie McKinney, Fly By Midnight, Corey Glover and others. </p>
                            <p> When not traveling and doing recording sessions I enjoy cooking. As a teenager I worked for a local farm-to-table restaurant called, "Mumford's Culinary Center." There I learned how to properly work with various herbs and vegetables from seed to harvest. I also learned various cooking styles as well as how to properly blend aromatic flavors.</p>
                            <p> I also enjoy swimming, snowboarding, and biking. A lot of my time is spent traveling on a tour bus or plane and I always love to be able to stretch out and get the blood flowing. I've been snowboarding since I was very young and usually take 1 to 2 trips a season to British Columbia to get some great riding in. I love to swim laps at my local pool and bike along the beach by my home.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>  
                </Col>
            </Row> 
        </Container>
    );
};

export default Home;