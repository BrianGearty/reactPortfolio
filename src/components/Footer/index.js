import React from "react";
import "./style.css"



function Footer() {

    return (
    <footer className='footer'>
        <div >
        <a href="https://www.facebook.com/brian.gearty.7/"><img src="../assets/images/facebooklogo.svg" alt="Facebook logo" className="facebook aTag"></img></a>
        <a href="https://www.instagram.com/briangearty/?hl=en"><img src="../assets/images/instagramlogo.svg" alt="Instagram logo" className="instagram aTag"></img></a>
        <a href="https://www.linkedin.com/in/brian-gearty-2a434a76/"><img src="../assets/images/linkedinlogo.svg" alt="Linkedin logo" className="linkedin aTag" ></img></a>
        <a href="https://github.com/BrianGearty"><img src="../assets/images/githublogo.svg" alt="Github logo" className="github aTag" ></img></a>
        </div>
            
    </footer>

    );
}

export default Footer;