import React from 'react';
import me from '../images/oh.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <>
        <div className="about-container container-fluid col-lg-12 row">
            <div>
                <div className="about-header">
                    <h1 className="about-title col-lg-12">THE STORY OF
                    <Typewriter
                        options={{
                            strings: ['ohsujin ceramic', 'the damda studio'],
                            autoStart: true,
                            loop: true,
                        }}      
                    />    
                    <span className="about-title-bottom col-lg-12">오수진 도자기</span>
                    </h1>
                </div>
                <p className="about-content-top">
                    <span>
                    <FontAwesomeIcon icon={faQuoteLeft} color={"#969696"} size="2x" /> 
                    </span> 어렸을 때부터 만들기를 좋아했던 한 아이가 
                        흙의 촉감과 불의 신비한 매력에 빠져
                        도예가가 되었습니다.
                </p>
                <div className="about-content-wrapper">
                    <div className="about-content-bottom">
                        <img src={me} className="about-pic" /> 
                        <p>
                            도자기는 다양한 흙의 종류와 유약들의 만남으로
                            불 안에서 일어나는 일은 예측할 수 없기에
                            시간이 지나도 가마를 열 때마다 설레는 마음은 언제나 한결같습니다. 
                            그래서 작품 하나하나의 소중함을 다시 한번 생각하게 됩니다.
                        </p>
                        <br/>
                        <span>life with ceramics</span>
                        <br />
                        <br/>
                        <p>
                            오수진 도자기는 도자기의 매력에 빠진
                            도예가 오수진이 생활 속 도자기들을
                            심플하고 모던한 형태와 컬러로 표현해보았습니다.
                            모든 작품은 물레 성형부터 가마 소성 및 판매까지
                            모두 수작업으로 직접 만들고 운영하고 있습니다.
                        </p> 
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}

export default About;
