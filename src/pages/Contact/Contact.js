import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";

// const cardTitleSyle = {display: 'flex',
// alignItems: 'center',
// justifyContent: 'center'
// }

const centerItem = { margin: "auto", width: "50%" }

const inputWidth = {width: "500px"}


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gsubq8v', e.target, 'user_pqHnzMPwJyjHNYwuZgwiR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert("Your message has been sent!")
}  

const Contact = () => {
    return (
        <Container fluid>
            <Card style={centerItem}>
                <Card.Body>
            <Form className="contact-form" style={centerItem} onSubmit={sendEmail}>
            <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Name" style={inputWidth} name="name"/>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt -2 mx-auto">
                    <input type="text" className="form-control" placeholder="Email Address" style={inputWidth} name="email"/>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" style={inputWidth} name="subject"/>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-2 mx-auto">
                    <textarea type="text" id="" cols="30" rows="8" className="form-control" style={inputWidth} placeholder="Your message" name="message"></textarea>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-3  mx-auto">
                    <input type="submit" className="form-btn btn-info" value="Send message"></input>
                </Col>  
                </Row>
            </Form>
            </Card.Body>
            </Card>
        </Container>
    );
};

export default Contact;