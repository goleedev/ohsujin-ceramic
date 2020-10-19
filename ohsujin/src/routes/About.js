import React from 'react';
import pot1 from '../images/product1.png';

const About = () => {
    return (
        <>
        <div className="about-container container row">
            <div className="">
                <h3>ohsujin ceramic</h3>
                <h2>오수진 도자기</h2>
                <p>
                    어렸을 때부터 만들기를 좋아했던 한 아이가 <br/>
                    흙의 촉감과 불의 신비한 매력에 빠져<br/>
                    <span>도예가</span>가 되었습니다.<br/>
            
                    도자기는 다양한 흙의 종류와 유약들의 만남으로<br/>
                    불 안에서 일어나는 일은 예측할 수 없기에<br/>
                    시간이 지나도 가마를 열 때마다 설레는 마음은 언제나 한결같습니다.<br/> 
                    그래서 작품 하나하나의 소중함을 다시 한번 생각하게 됩니다.<br/>
            
                    오수진 도자기는 도자기의 매력에 빠진<br/>
                    도예가 오수진이 생활 속 도자기들을<br/>
                    심플하고 모던한 형태와 컬러로 표현해보았습니다.<br/>
            
                    모든 작품은 물레 성형부터 가마 소성 및 판매까지<br/>
                    모두 수작업으로 직접 만들고 운영하고 있습니다.<br/>
                </p>    
            </div>
            <div className="">
                <img src={pot1} className="carousel-img"/>
            </div>
        </div>
        </>
    )
}

export default About;
