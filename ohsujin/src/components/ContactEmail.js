import React, { useState } from 'react';

const ContactEmail = () => {

    const onSubmit = (event) => {
        
        document.getElementById('contact-form').reset();
    }

    function sendMessage() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let options = document.getElementById("options").value;
        let file = document.getElementById("file").value; 
        window.location.href =
        "https://us-central1-naishare.cloudfunctions.net/sendMail?name=" +
        name +
        "&email=" +
        email +
        "&message=" +
        message +
        "";
    }
    return (
    <div className="get-in-touch container">
        <h1 className="title">문의하기</h1>
        <div className="alert">문의가 정상적으로 전송되었습니다!</div>
        <form className="contact-form row">
            <div className="form-field col-lg-6">
                <input name="name" id="name" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="name">성함</label>
            </div>
            <div className="form-field col-lg-6">
                <select name="options" id="options" className="input-text js-input">
                    <option value=""></option>
                    <option value="shipping">배송 문의</option>
                    <option value="refund">환불 문의</option>
                    <option value="class">수업 문의</option>
                    <option value="product">상품 문의</option>
                    <option value="etc">기타 문의</option>     
                </select>
                <label className="label" htmlFor="option">문의 사항</label>
            </div>    
            <div className="form-field col-lg-7">
                <input name="email" id="email" className="input-text js-input" type="email" required />
                <label className="label" htmlFor="email">이메일</label>
            </div>   
            <div className="form-field col-lg-5">
                <input name="file" id="file" type="file" />
            </div>
            <div className="form-field col-lg-12">
                <input name="message" id="message" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="message">문의 내용</label>
            </div>
            <div className="form-field col-lg-12">
                <input onSubmit={onSubmit} className="submit-btn" type="submit" value="보내기" />
            </div>
        </form>
    </div>
    )
}

export default ContactEmail;
