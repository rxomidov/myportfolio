import React from 'react';
import logo from '../images/shirt_00000.png';
import {FaAlignJustify, FaTimes} from "react-icons/all";

//console.log(logo)

const Nav = () => {
    const [state, setState] = React.useState(false);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <ul className="navbar-left">
                        <div className="navbar-left-logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </ul>
                    <ul className="navbar-right nrdn">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    {state ? (
                        <ul className="navbar-right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#services"onClick={() => setState(!state)}>Services</a></li>
                            <li><a href="#about" onClick={() => setState(!state)}>About</a></li>
                            <li><a href="#skills" onClick={() => setState(!state)}>Skills</a></li>
                            <li><a href="#portfolio" onClick={() => setState(!state)}>Portfolio</a></li>
                            <li><a href="#" onClick={() => setState(!state)}>Blog</a></li>
                            <li><a href="#contact" onClick={() => setState(!state)}>Contact</a></li>
                        </ul>
                    ) : '' }
                </div>

            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                {!state ? <FaAlignJustify/> : <FaTimes/>}</div>
        </nav>
    )
}

export default Nav;