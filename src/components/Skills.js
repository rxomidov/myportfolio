import React from 'react';
import cardimg from '../images/Grad.PNG'
import {FaTelegram, FaInstagram, FaTwitter} from "react-icons/all";

const Skills = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, optio"
    })
    return (
        <header className="skills" id="skills">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="skills-card-left">
                            <div className="card-img">
                                <img src={cardimg} alt=""/>
                            </div>
                            <h2 className="card-name">Rixsitillo Xomidov</h2>
                            <h3 className="card-name">Web Developer</h3>
                            <div className="card-icons">
                                <a href="#" id="">
                                    <FaTelegram/>
                                </a>
                                <a href="#" id="">
                                    <FaInstagram/>
                                </a>
                                <a href="#" id="">
                                    <FaTwitter/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="skills-card">
                            <h2 className="skills-header">My Skills</h2>
                            <div className="skill-bar">
                                <p className="skill-name">HTML5</p>
                                <div className="skill-box">
                                    <div className="skill-lenght1"></div>
                                </div>
                                <div className="skill-procent text-right">88%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">CSS5</p>
                                <div className="skill-box">
                                    <div className="skill-lenght2"></div>
                                </div>
                                <div className="skill-procent text-right">92%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">JAVASCRIPT</p>
                                <div className="skill-box">
                                    <div className="skill-lenght3"></div>
                                </div>
                                <div className="skill-procent text-right">90%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">AFTER EFFECTS</p>
                                <div className="skill-box">
                                    <div className="skill-lenght4"></div>
                                </div>
                                <div className="skill-procent text-right">98%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">PHOTOSHOP</p>
                                <div className="skill-box">
                                    <div className="skill-lenght1"></div>
                                </div>
                                <div className="skill-procent text-right">88%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">PPEMIERE PRO</p>
                                <div className="skill-box">
                                    <div className="skill-lenght2"></div>
                                </div>
                                <div className="skill-procent text-right">92%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">SKETCH</p>
                                <div className="skill-box">
                                    <div className="skill-lenght3"></div>
                                </div>
                                <div className="skill-procent text-right">90%</div>
                            </div>
                            <div className="skill-bar">
                                <p className="skill-name">REACT JS</p>
                                <div className="skill-box">
                                    <div className="skill-lenght4"></div>
                                </div>
                                <div className="skill-procent text-right">98%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Skills;