import React from "react";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "../../components/Grid";
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'; 
import data from "../../components/NavData/NavLogo";



function Navigation() {

    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg">
                <NavLink className="nav-brand home" to="/"><Navbar.Brand><img className="nav-logo" key={data[0].id} src={data[0].image} alt={data[0].alt}></img></Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  data-toggle="collapse" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink activeClassName="navbar__link--active" className="nav-item music" to="/music">MUSIC</NavLink>
                        <NavLink activeClassName="navbar__link--active" className="nav-item webDev" to="/webdevelopment">WEB DEVELOPMENT</NavLink>
                        <NavLink activeClassName="navbar__link--active" className="nav-item contact" to="/contact">CONTACT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;
