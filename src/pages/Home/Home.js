import React from "react";
import styled, { keyframes } from 'styled-components';
import { zoomIn} from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import "../Home/home.css"



const Home = () => {
    const fadeUpAnimation = keyframes`${zoomIn}`;
    const FadeUp = styled.div `animation: 1s ${fadeUpAnimation};`;

    return (
    
        <Container fluid >
            <Row>
                    <Col size="lg-2" className="leftside"></Col>
                    <Col size="lg-10" className="leftside">
                            <div className='homeCard-body'>
                                <div className="homeTextDiv">
                                <FadeUp><div className="homeTitle">Full Stack Developer</div></FadeUp>
                                    <FadeUp><p className="homeText">JavaScript developer working in React, jQuery, Node, MySQL, MongoDB, DynamoDB. Currently teaching bootcamp students at 2U and a freelance back end developer with Shoresite Designs.</p></FadeUp>
                                    <FadeUp><p className="homeText">Working as a freelance musician my entire life I know what it takes to put my soul into heart-felt projects. This challenging line of work has helped hone my ability to collaboratively create with a team and my punctual, self-starting work ethic.</p></FadeUp>
                                    <FadeUp><p className="homeText">My determination to progress musically has brought many professional achievements and I bring that same determination to software development. I am excited about building and enhancing the performance of intuitive, user-centric applications and websites that improve the world.</p></FadeUp>
                                </div>
                            </div>
                    </Col>
            </Row>
        </Container>
    
    );
};

export default Home;