import React from "react";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "../../components/Grid";
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
// import DropdownNav from "../Dropdown";



// const cardCenter = { display: 'flex', justifyContent: 'center' }
function Nav() {

    return (
        <Container fluid>
            <Navbar expand="lg">
                <NavLink to="/"><Navbar.Brand>Brian Gearty</Navbar.Brand></NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                <NavLink className="nav-item nav-link music" to="/music">Music</NavLink>
                <NavLink className="nav-item nav-link webDev" to="/webdevelopment">Web Development</NavLink>
                <NavLink className="nav-item nav-link contact" to="/contact">Contact</NavLink>
                </Nav>
                    
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Nav;
