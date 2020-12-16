import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "../Resume/Resume.css"



const Resume = () => {
    return (
        <div className="resumePage">
            <Container fluid className="homeWrapper">
                <Row className="row-divided">
                    <Col size="lg-8">
                        <div className='resume'>

                            <h2><span className="resumeTitle">TOURING + PROFESSIONAL EXPERIENCE</span></h2>
                            <br />
                            <br />
                            <h4 className="companyName">Mike Orlando & Corey Glover</h4>
                            <p className="duration">2019 - Present</p>
                            <p className="description">Touring/recording bassist for rock, funk, metal artist. Backed artist on 5 shows throughout New York City.</p>

                            <h4 className="companyName">Triumph Brewing Company</h4>
                            <p className="duration">2019 - Present</p>
                            <p className="description">Booking agent and music consultant for brew pub and music venue. Responsible for booking and scheduling all entertainment for touring and local acts. Handle all necessary production with shows including offers, technical specifications, social media and logistics.</p>

                            <h4 className="companyName">Dana Fuchs</h4>
                            <p className="duration">2017 - Present</p>
                            <p className="description">Touring bass for rock, soul, RnB artist. Backed Dana for 17 tours all over the United States and Europe.</p>

                            <h4 className="companyName">Gedeon Luke & the People</h4>
                            <p className="duration">2015 - Present</p>
                            <p className="description">Touring bass for funk, soul, gospel artist. Backed Gedeon for the past 5 years on over 20 tours and TV screenings.</p>

                            <h4 className="companyName">Aguilar</h4>
                            <h5 className="jobTitle">Quality Control</h5>
                            <p className="duration">2015 - 2016</p>
                            <p className="description">Tested thousands of finished bass amplifiers and bass effects pedals, and managed the packing and shipping.</p>

                            <h4 className="companyName">Big Crown Records</h4>
                            <h5 className="jobTitle">Intern</h5>
                            <p className="duration">2014 - 2015</p>
                            <p className="description">Responsible for hundreds of sales, shipping, social media of Funk and Soul record label. Dealt with record distributors globally for the sales of the labels entire catalog as well as handled the shipping logistics and packing. Updated the labels Facebook and Instagram pages with news and events.</p>
                            <br />
                            <h2><span className="resumeTitle">EDUCATION</span></h2>
                            <br />
                            <h4 className="companyName">Rutgers Full Stack Coding Certificate</h4>
                            <p className="duration">June 2020 - December 2020</p>
                            <p className="description">Candidate for coding certificate in 2020. Studied various web development technologies as well as clean coding practices. Learned how to build full stack websites and web applications utilizing smooth user interface design, building servers, and working with relational and non relational databases. Studied API integrations, server side development (MERN Stack, Progressive Web Applications), and Quality Assurance (Unit Testing, Linting, Continuous Integration).</p>
                            <br />
                            <h4 className="companyName">The Collective School of Music</h4>
                            <p className="duration">2012 - 2014</p>
                            <p className="description">Studied various genres of music including blues, rock, pop, funk, jazz, afro-cuban, afro-caribbean, afro beat, hip, hop, reggae, Brazilian and drum n bass. Other classes included music reading, musicianship, music theory, recording, rehearsal and technique. Studied with  Lincoln Goines, Kim Plainfield, Frank Gravis, Sheryl Bailey, Tony Cimorosi, Bob Quaranta, and many other top NYC musicians and educators.</p>
                            <br />
                        </div>
                    </Col>
                    <Col size="lg-4">
                        <div className="skills">

                            <h2><span className="resumeTitle">TECHNICAL SKILLS</span></h2>
                            <ul>
                                <li className="skillList">HTML5</li>
                                <li className="skillList">CSS3</li>
                                <li className="skillList">Javascript</li>
                                <li className="skillList">Node.js</li>
                                <li className="skillList">MySQL</li>
                                <li className="skillList">MongoDB</li>
                                <li className="skillList">React</li>
                                <li className="skillList">Heroku</li>
                                <li className="skillList">Git</li>
                                <li className="skillList">jQuery</li>
                                <li className="skillList">REST API</li>
                                <li className="skillList">JSON</li>
                                <li className="skillList">Express</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Resume;