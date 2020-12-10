import React from "react";
import './style.css';
import { NavLink } from 'react-router-dom';
import data from "../../components/NavData/NavLogo";



function Navigation() {

    return (
            <nav className='navbar navbar-expand-lg my-5'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand home" to="/"><img className="nav-logo" key={data[0].id} src={data[0].image} alt={data[0].alt}></img></NavLink>
                <div className="collapse navbar-collapse float-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink activeClassName="navbar__link--active" className="nav-item music" to="/music">MUSIC</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="navbar__link--active" className="nav-item webDev" to="/webdevelopment">WEB DEVELOPMENT</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="navbar__link--active" className="nav-item contact" to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navigation;
