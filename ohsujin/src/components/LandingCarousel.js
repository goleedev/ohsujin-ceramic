import React from 'react';
import pot1 from '../images/product1.png';
import pot2 from '../images/product2.png';
import {
    Carousel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingCarousel = () => {
    return (
    <Carousel className="carousel-container container">
        <Carousel.Item>
            <div className="carousel-caption">
                <h2>시그니처 도자기</h2>
                <p>그릇부터 혼밥세트 까지</p>
                <Link to="/store" className="btn">구경하기</Link>
            </div>
            <div className="carousel-img">
                <img
                src={pot1}
                alt="pot1"
                />      
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-caption">
                <h2>나만의 도자기,</h2>
                <p>원데이 클래스로 만들어보기</p>
                <Link to="/class" className="btn">구경하기</Link>
            </div>
            <div className="carousel-img">
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
