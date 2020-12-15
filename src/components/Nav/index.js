import React from "react";
import './style.css';
import { NavLink } from 'react-router-dom';



function Navigation() {

  return (

    <nav class="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/">BRIAN GEARTY</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
            <NavLink className="navLink" to="/music">MUSIC</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/webdevelopment">WEB DEVELOPMENT</NavLink>
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
