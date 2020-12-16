import React from "react";
import './style.css';
import { NavLink } from 'react-router-dom';



function Navigation() {

  return (

    <nav className="navbar navbar-expand-lg ">
  <NavLink className="navbar-brand" to="/">BRIAN GEARTY</NavLink>
  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span><i className="fa fa-plus" aria-hidden="true"></i></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
            <NavLink className="navLink" to="/music">MUSIC</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/webdevelopment">WEB DEVELOPMENT</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/resume">RESUME</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/contact">CONTACT</NavLink>
          </li>
    </ul>
  </div>
</nav>






  )

};

    // <nav class="navbar navbar-expand-md">
    //   <NavLink className="navbar-brand" to="/">BRIAN GEARTY</NavLink>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse float-right" id="navbarNav">
    //     <ul class="navbar-nav">
          // <li class="nav-item">
          //   <NavLink className="nav-link" to="/music">MUSIC</NavLink>
          // </li>
          // <li class="nav-item">
          //   <NavLink className="nav-link" to="/webdevelopment">WEB DEVELOPMENT</NavLink>
          // </li>
          // <li class="nav-item">
          //   <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
          // </li>
    //     </ul>
    //   </div>
    // </nav>

export default Navigation;
