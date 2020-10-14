import React from 'react';
import kakao from '../images/circle1.png';
import instagram from '../images/circle2.png';
import call from '../images/circle3.png';
import email from '../images/circle4.png';

const ContactUsCards = () => {
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <a href="https://pf.kakao.com/_ZExmGj" target="_blank" className="circle-btn col-md-3 col-sm-5">
                <img src={kakao} alt="kakao" />
            </a>
            <a href="tel:07040428642" className="circle-btn col-md-3 col-sm-5">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.instagram.com/thedamda_ceramic/" target="_blank" className="circle-btn col-md-3 col-sm-5">
                <img src={call} alt="call" />
            </a>
            <a href="/contact" className="circle-btn col-md-3 col-sm-5">
                <img src={email} alt="email" />
            </a>
        </div>
    )
}

export default ContactUsCards;
