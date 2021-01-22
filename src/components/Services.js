import React from 'react';
import {Fa500Px, FaEdit, FaGithub, FaPhotoVideo, FaTelegram} from "react-icons/all";

const Services = () => {
    const [header] = React.useState({mainHeader: "SRVICES", subHeading: "My Services",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "                            Alias laborum nesciunt officiis praesentium, quod veniam."});
    const icons = [FaGithub,FaPhotoVideo,FaEdit,FaTelegram,FaPhotoVideo,Fa500Px]
    const [state] = React.useState([
        {
            id: 1,
            icon: 'fa fa-github',
            heading: 'Web Development',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
        },
        {
            id: 2,
            icon: 'fa fa-github',
            heading: 'Photography',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
        },
        {
            id: 3,
            icon: 'fa fa-github',
            heading: 'Web Design',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
        },
        {
            id: 4,
            icon: 'fa fa-github',
            heading: 'App Developing',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
        },
        {
            id: 5,
            icon: 'fa fa-github',
            heading: 'Video Editing',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
        },
        {
            id: 6,
            icon: 'fa fa-instagram',
            heading: 'SEO Expert',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
        }
    ])
    return(
        <div className="services" id='services'>
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        {state.map((info,idx) => {
                            const Icon = icons[idx];
                            return (
                                <div className="col-4 bgMain" key={info.id}>
                                    <div className="services-box">
                                        <Icon className="commonIcons" icon={info.icon}/>
                                        {/*<FaGithub className="commonIcons"/>*/}
                                        <div className="sb-header">{info.heading}</div>
                                        <div className="sb-p">{info.text}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;