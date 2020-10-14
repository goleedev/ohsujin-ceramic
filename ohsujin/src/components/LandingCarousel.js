import React from 'react';
import pot1 from '../images/product1.png';
import pot2 from '../images/product2.png';
import {
    Carousel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingCarousel = () => {
    return (
    <Carousel className="carousel container">
        <Carousel.Item className="col-lg-12">
            <div className="carousel-caption col-lg-5">
                <h2>시그니처 도자기</h2>
                <p>그릇부터 혼밥세트 까지</p>
                <Link to="/shop" className="btn">구경하기</Link>
            </div>
            <div className="carousel-img col-lg-7">
                <img
                src={pot1}
                alt="pot1"
                />      
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-caption col-lg-5">
                <h2>나만의 도자기,</h2>
                <p>원데이 클래스로 만들어보기</p>
                <Link to="/class" className="btn">구경하기</Link>
            </div>
            <div className="carousel-img col-lg-7">
                <img
                src={pot2}
                alt="pot2"
                />
            </div>
        </Carousel.Item>
    </Carousel>
    )
}

export default LandingCarousel;