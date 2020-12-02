import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import "../Contact/Contact.css";

// const cardTitleSyle = {display: 'flex',
// alignItems: 'center',
// justifyContent: 'center'
// }





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
            <Card>
                <h3>Contact Brian</h3>
                <Card.Body>
            <Form className="contact-form" onSubmit={sendEmail}>
            <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt -2 mx-auto">
                    <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </Col>
                </Row>
                <br/>
                <Row className="row pt-5 mx-auto">
                <Col size="-8 form-group pt-2 mx-auto">
                    <textarea type="text" id="" cols="30" rows="8" className="form-control" placeholder="Your message" name="message"></textarea>
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
    <br/>
    <br/>
    <br/>
        </Container>
    );
};

export default Contact;