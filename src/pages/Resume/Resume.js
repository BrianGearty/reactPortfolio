import React from "react";
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import "../Resume/Resume.css"
import Footer from "../../components/Footer";
import Loading from "../../components/Loading/loading";


const Resume = () => {
    const flipAnimation = keyframes`${fadeIn}`;
    const Flip = styled.div `animation: 1s ${flipAnimation};`;
    return (
        <div className="resumePage">
            <Container fluid className="homeWrapper">
                <Row className="row-divided">
                    <Col size="lg-8">
                        <div className='resume'>
                            <Flip><h2><span className="resumeTitle">TOURING + PROFESSIONAL EXPERIENCE</span></h2></Flip>
                            <br />
                            <br />
                            <Flip><h4 className="companyName">Mike Orlando & Corey Glover</h4></Flip>
                            <Flip><p className="duration">2019 - Present</p></Flip>
                            <Flip><p className="description">Touring/recording bassist for rock, funk, metal artist. Backed artist on 5 shows throughout New York City.</p></Flip>

                            <Flip><h4 className="companyName">Triumph Brewing Company</h4></Flip>
                            <Flip><p className="duration">2019 - Present</p></Flip>
                            <Flip><p className="description">Booking agent and music consultant for brew pub and music venue. Responsible for booking and scheduling all entertainment for touring and local acts. Handle all necessary production with shows including offers, technical specifications, social media and logistics.</p></Flip>

                            <Flip><h4 className="companyName">Dana Fuchs</h4></Flip>
                            <Flip><p className="duration">2017 - Present</p></Flip>
                            <Flip><p className="description">Touring bass for rock, soul, RnB artist. Backed Dana for 17 tours all over the United States and Europe.</p></Flip>

                            <Flip><h4 className="companyName">Gedeon Luke & the People</h4></Flip>
                            <Flip><p className="duration">2015 - Present</p></Flip>
                            <Flip><p className="description">Touring bass for funk, soul, gospel artist. Backed Gedeon for the past 5 years on over 20 tours and TV screenings.</p></Flip>

                            <Flip><h4 className="companyName">Aguilar</h4></Flip>
                            <Flip><h5 className="jobTitle">Quality Control</h5></Flip>
                            <Flip><p className="duration">2015 - 2016</p></Flip>
                            <Flip><p className="description">Tested thousands of finished bass amplifiers and bass effects pedals, and managed the packing and shipping.</p></Flip>

                            <Flip><h4 className="companyName">Big Crown Records</h4></Flip>
                            <Flip><h5 className="jobTitle">Intern</h5></Flip>
                            <Flip><p className="duration">2014 - 2015</p></Flip>
                            <Flip><p className="description">Responsible for hundreds of sales, shipping, social media of Funk and Soul record label. Dealt with record distributors globally for the sales of the labels entire catalog as well as handled the shipping logistics and packing. Updated the labels Facebook and Instagram pages with news and events.</p></Flip>
                            <br />
                            <Flip><h2><span className="resumeTitle">EDUCATION</span></h2></Flip>
                            <br />
                            <Flip><h4 className="companyName">Rutgers Full Stack Coding Certificate</h4></Flip>
                            <Flip><p className="duration">June 2020 - December 2020</p></Flip>
                            <Flip><p className="description">Candidate for coding certificate in 2020. Studied various web development technologies as well as clean coding practices. Learned how to build full stack websites and web applications utilizing smooth user interface design, building servers, and working with relational and non relational databases. Studied API integrations, server side development (MERN Stack, Progressive Web Applications), and Quality Assurance (Unit Testing, Linting, Continuous Integration).</p></Flip>
                            <br />
                            <Flip><h4 className="companyName">The Collective School of Music</h4></Flip>
                            <Flip><p className="duration">2012 - 2014</p></Flip>
                            <Flip><p className="description">Studied various genres of music including blues, rock, pop, funk, jazz, afro-cuban, afro-caribbean, afro beat, hip, hop, reggae, Brazilian and drum n bass. Other classes included music reading, musicianship, music theory, recording, rehearsal and technique. Studied with  Lincoln Goines, Kim Plainfield, Frank Gravis, Sheryl Bailey, Tony Cimorosi, Bob Quaranta, and many other top NYC musicians and educators.</p></Flip>
                            <br />
                            
                        </div>
                    </Col>
                    <Col size="lg-4">
                    
                        <div className="skills">
                            <Flip><h2><span className="resumeTitle">TECHNICAL SKILLS</span></h2></Flip>
                            <br />
                            <br />
                            <LazyLoad once height="100%" placeholder={<Loading />}>
                            <ul className="fa-ul">
                                <Flip><li className="skillList"><img className='logo' src="assets/images/HTML5_logo_and_wordmark.png" alt="HTML logo"></img>HTML 5</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/css3.png" alt="CSS logo"></img>CSS3</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/javascript.png" alt="javascript logo"></img>Javascript</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/nodejs-new-white.png" alt="Node logo"></img>Node.js</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/React-icon.png" alt="React logo"></img>React</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/jquery-vertical.png" alt="jQuery logo"></img>jQuery</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/mysql.png" alt="SQL logo"></img>MySQL</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/MongoDB_Leaf_White_RGB.png" alt="mongo logo"></img>MongoDB</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/rest-api.png" alt="restAPI logo"></img>REST API</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/json.png" alt="JSON logo"></img>JSON</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/expressjs-icon.png" alt="express logo"></img>Express</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/heroku.png" alt="heroku logo"></img>Heroku</li></Flip>
                                <Flip><li className="skillList"><img className='logo' src="assets/images/GitHub-Logo.png" alt="Github logo"></img>Git</li></Flip>
                            </ul>
                            </LazyLoad>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Resume;