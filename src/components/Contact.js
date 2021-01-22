import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaTelegram} from "react-icons/all";
import logo from '../images/shirt_00000.png'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="contact-section">
                    <div className="cs-logo">
                        <img src={logo} alt="logo"/>
                        <h3 className="heading">Wait for more...</h3>
                        <div className="row justifyCenter">
                            <div className="col-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto error fugit impedit labore minus natus nostrum qui,
                                quia veniam voluptas? Assumenda eaque mollitia nisi sint.
                            </div>
                            <div className="contact-circles">
                                <ul><a href="https://www.facebook.com"><FaFacebookF/></a></ul>
                                <ul><a href="https://www.twitter.com"><FaTwitter/></a></ul>
                                <ul><a href="https://www.pinterest.com"><FaPinterest/></a></ul>
                                <ul><a href="https://www.telegram.com"><FaTelegram/></a></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;