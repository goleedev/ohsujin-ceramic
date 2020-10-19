import React from 'react'
import ContactEmail from 'components/ContactEmail';
import kakao from '../images/circle1.png';
import instagram from '../images/circle2.png';
import call from '../images/circle3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ userObj }) => {
    return (
        <>
            <ContactEmail />
            <div className="row container contact-cards">
                <h1 className="col-lg-12">
                    바로 상담하기 <FontAwesomeIcon icon={faAngleDown} color={"#555555"} size="1x" /> 
                </h1>
                <a href="https://pf.kakao.com/_ZExmGj" target="_blank" rel="noopener noreferrer" className="circle-btn col-md-4 col-sm-6">
                    <img src={kakao} alt="kakao" />
                </a>
                <a href="tel:07040428642" className="circle-btn col-md-4 col-sm-6">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.instagram.com/thedamda_ceramic/" target="_blank" rel="noopener noreferrer" className="circle-btn col-md-4 col-sm-6">
                    <img src={call} alt="call" />
                </a>
            </div>
        </>
    )
}

export default Contact;
