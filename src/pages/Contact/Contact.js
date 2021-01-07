import React from "react";
import emailjs from "emailjs-com";
import "../Contact/Contact.css";
import Footer from "../../components/Footer";


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
        <div className="contactFade">
        <div className="container email-container email-bg-pic">
            <header className="education email-header">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="email-title helllo text-center">CONTACT BRIAN</h2>
                        <p className="emailText">Interested in working together? Get in touch below.</p>
                    </div>
                </div>
            </header>

            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control email-window" type="text" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="submit" className="btn btn-email-send" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
    </div>

    );
};

export default Contact;