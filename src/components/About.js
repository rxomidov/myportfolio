import React from 'react';
import men1 from '../images/Grad.PNG'

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, optio"
    })
    const [state] = React.useState([
        {id: 1, title:"Name", text: "Rixsitillo Xomidov"},
        {id: 2, title:"Email", text: "rixsitilloxomidov@gmail.com"},
        {id: 3, title:"Phone", text: "+998 99 992 28 17"},
        {id: 4, title:"Instagram", text: "instagram.com/@__rxz__17"},
        {id: 4, title:"Github", text: "github.com/rxomidov"},
        {id: 4, title:"LinkedIn", text: "linkedin.com/rixsitilloxomidov"}
    ])
        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="common">
                        <h1 className="mainHeader">{header.subHeader}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row">
                        <div className="col-6 h-650 alignCenter">
                            <div className="about-img">
                                <img src={men1} alt="img"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about-info">
                                <h1>Hi There</h1>
                                <div className="ai-p1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias assumenda doloremque excepturi facere laboriosam minus
                                    placeat praesentium similique totam velit! Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Deserunt, mollitia?
                                </div>
                                <div className="ai-p2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias assumenda doloremque excepturi facere laboriosam minus
                                    placeat praesentium similique totam velit!
                                </div>
                                <div className="info-contacts">
                                    <div className="row">
                                        {state.map((info) => (
                                            <div className="col-6" key={info.id}>
                                                <strong>{info.title}</strong>
                                                <p>{info.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default About;