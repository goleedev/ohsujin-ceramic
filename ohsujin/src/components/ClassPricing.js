import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar, faWonSign } from "@fortawesome/free-solid-svg-icons";

const ClassPricing = () => {
    return (
        <>
        <div id="class-pricing" className="w-table-cell container">
            <h1>수업 안내</h1>
            <p>* 더 다양한 수업을 보고 싶으시다면, 더보기 버튼을 눌러 주세요.</p>
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
                            <span><FontAwesomeIcon icon={faWonSign} color={"#555555"} size="1x" /> </span> 재료비 포함
                        </div>
                    </div>
                </div>
                <div className="w-card color-blue">
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
            </div>
        </div>
        </>                
    )
}

export default ClassPricing;
