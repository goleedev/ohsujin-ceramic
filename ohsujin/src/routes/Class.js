import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar, faWonSign } from "@fortawesome/free-solid-svg-icons";

const Class = () => {
    return (
      <>
      <div id="class-oneday" className="w-table-cell container">
            <h1>오수진 클래스</h1>
            <p>수업 전 알아두면 좋은 점</p> 
            <div></div>    
            <h1>원데이 클래스</h1>
            <p>하루 동안 만드는 나만의 작품</p>
            <div className="w-container">
                <div className="w-card color-violet">
                    <div className="card-header">
                        <div className="w-title">
                                핸드 페인팅
                        </div>
                        <div className="w-price">
                            2.5 만원
                        </div>
                        <div className="container-button">
                            <a className="w-button" href="/contact">상담하기</a>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faCalendar} color={"#555555"} size="1x" /> </span> 원데이 클래스
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faClock} color={"#555555"} size="1x" /> </span> 2시간
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 재료비 포함
                        </div>
                    </div>
                </div>
                <div className="w-card color-green">
                    <div className="card-header">
                        <div className="w-title">
                            성인 핸드빌
                        </div>
                        <div className="w-price">
                            4.4 만원
                        </div>
                        <div className="container-button">
                            <a className="w-button" href="/contact">상담하기</a>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faCalendar} color={"#555555"} size="1x" /> </span> 원데이 클래스
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faClock} color={"#555555"} size="1x" /> </span> 2시간
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 아동 핸드빌: 3.3 만원
                        </div>
                    </div>
                </div>
                <div className="w-card color-blue">
                    <div className="card-header">
                        <div className="w-title">
                            물레 체험
                        </div>
                        <div className="w-price">
                            1.5 만원
                        </div>
                        <div className="container-button">
                            <a className="w-button" href="/contact">상담하기</a>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faCalendar} color={"#555555"} size="1x" /> </span> 원데이 클래스
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faClock} color={"#555555"} size="1x" /> </span> 2시간
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 재료비 포함
                        </div>
                    </div>
                </div>
                </div>
            </div> 
            <div id="class-regular" className="w-table-cell container">
            <h1>정규 클래스</h1>
            <p>꾸준히 배우는 도예 기술</p>
            <div className="w-container">
                <div className="w-card color-violet">
                    <div className="card-header">
                        <div className="w-title">
                            물레 정규
                        </div>
                        <div className="w-price">
                            16.5 만원
                        </div>
                        <div className="container-button">
                            <a className="w-button" href="/contact">상담하기</a>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faCalendar} color={"#555555"} size="1x" /> </span> 월 4회 기준
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faClock} color={"#555555"} size="1x" /> </span> 2시간
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 재료비 포함
                        </div>
                    </div>
                </div>
                <div className="w-card color-green">
                    <div className="card-header">
                        <div className="w-title">
                            핸드빌 정규
                        </div>
                        <div className="w-price">
                            14 만원
                        </div>
                        <div className="container-button">
                            <a className="w-button" href="/contact">상담하기</a>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faCalendar} color={"#555555"} size="1x" /> </span> 월 4회 기준
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faClock} color={"#555555"} size="1x" /> </span> 2시간
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 재료비 포함
                        </div>
                    </div>
                </div>
                <div className="w-card color-blue">
                    <div className="card-header">
                        <div className="w-title">
                            아동 정규
                        </div>
                        <div className="w-price">
                            12 만원
                        </div>
                        <div className="container-button">
                            <a className="w-button" href="/contact">상담하기</a>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faCalendar} color={"#555555"} size="1x" /> </span> 월 4회 기준
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faClock} color={"#555555"} size="1x" /> </span> 2시간
                        </div>
                        <div className="w-item">
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 재료비 포함
                        </div>
                    </div>
                </div>
            </div>
        </div> 
      </>
    )
}

export default Class;
