import React from 'react';
import p2 from '../images/p22.PNG';
import p3 from '../images/p3.jpg';
import p4 from '../images/p44.jpg';
import p5 from '../images/p55.jpg';
import p6 from '../images/p66.jpg';
import p1 from '../images/p11.jpg';
import p7 from '../images/p7.jpg';
import p8 from '../images/p8.jpg';
import wc from '../images/wc.jpg';
import ic from '../images/ic.jpg';
import gc from '../images/gc.jpg';

const Portfolio = () => {
    const [header] = React.useState({
        mainHeader: "PORTFOLI0", subHeading: "My Portfolio",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "                            Alias laborum nesciunt officiis praesentium, quod veniam."
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: 'FaGithub',
            heading: 'Mogo Creative Website Template',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: p1,
            url: "https://mogo-creative-website.netlify.app"
        },
        {
            id: 2,
            icon: 'FaCamera',
            heading: 'Bostfolia',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: p2,
            url: "https://bostfolia.netlify.app"
        },
        {
            id: 3,
            icon: 'FaGithub',
            heading: 'React Tech Store',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: p3,
            url: "https://react-tech-store-example.netlify.app"
        },
        {
            id: 4,
            icon: 'FaApple',
            heading: 'React Beach Resort',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: p8,
            url: "https://beach-resort-1707.netlify.app"
        },
        {
            id: 5,
            icon: 'FaGithub',
            heading: 'ReneShpBee E-Commerce Website',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: p7,
            url: "https://react-renoshop-continued.netlify.app"
        },
        {
            id: 6,
            icon: 'FaGithub',
            heading: 'CHAMP UZ Sport Website',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: p6,
            url: "https://champ-uz-info.netlify.app"
        },
        {
            id: 7,
            icon: 'FaGithub',
            heading: 'React Whatsapp Clone',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: wc,
            url: "https://what-s-app-clone-react.web.app"
        },
        {
            id: 8,
            icon: 'FaGithub',
            heading: 'React Instagram Clone',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: ic,
            url: "https://instarx-4cf72.web.app"
        },
        {
            id: 9,
            icon: 'FaGithub',
            heading: 'SPA for Github Interface',
            text: "A single page application work for work with Github.\n" +
                " Github API used for displaying user data.",
            bg: gc,
            url: "https://githubinterface.netlify.app"
        }
    ])
    return (
        <div className="services" id='portfolio'>
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        {state.map((state)=>(
                            <div key={state.id} className="col-4 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="portfolio-box">
                                    <img className="p-img" src={state.bg} alt=""/>
                                    <div className="sb-header padp">{state.heading}</div>
                                    <div className="sb-pp">{state.text}</div>
                                    <div className="port-link">
                                        <a href={state.url} className="btn-view">Visit</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
