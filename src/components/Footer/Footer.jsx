import React from "react";
import "./Footer.css";
import { images } from "../../images/images";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="logo" src={images.logo} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                        obcaecati at, itaque, ducimus nam, cumque unde soluta laudantium
                        asperiores temporibus id nemo ratione veritatis fugit alias
                        cupiditate quos enim laborum.
                    </p>
                    <div className="footer-social-icons">
                        <img src={images.facebook_icon} alt="" />
                        <img src={images.x_icon} alt="" />
                        <img src={images.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-8130176480</li>
                        <li>contact@foodiee.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Foodiee.com - All Right Reserved.</p>
        </div>
    );
};

export default Footer;
