import React from 'react';
import {Link} from 'react-router-dom';
import pot1 from '../images/product1.png';

function AboutCards() {
    return (
        <>
        <div data-aos="fade-up" className="row margin-top about-cards">
            <div className="col-sm-12">
                <div className="row about-items">
                    <Link to="/store"  className="col-sm-12 col-md-8 card-left">
                        <div className="row about-card">
                            <div className="col-sm-12">
                                <h3>STORE</h3>
                                <p>작품 보기</p> 
                                <img src={pot1} className="about-product" />    
                            </div>
                        </div>    
                    </Link>
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <Link to="/about" className="col-sm-12 about-card ">
                                <h3>ABOUT</h3>
                                <p>오수진 도자기</p> 
                                <img src={pot1} className="about-product" />
                            </Link>
                        </div>
                        <Link to="/class" className="row">
                            <div className="col-sm-12 about-card card-bottom">
                                <h3>CLASS</h3>
                                <p>수업 신청</p> 
                                <img src={pot1} className="about-product" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
           </div> 
        </>
    )
}

export default AboutCards;
