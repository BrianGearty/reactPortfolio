import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"></a>
            <a className="home" href="/">Home</a>
            <a className="music" href="/music">Music</a>
            <a className="webDev" href="/webdevelopment">Web Development</a>
            <a className="contact" href="/contact">Contact</a>
        </nav>
    );
}

export default Nav;