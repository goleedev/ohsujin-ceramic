import React from 'react';
import emailjs from 'emailjs-com';

const ContactEmail = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_izvec9v', 'template_gmojgrs', e.target, 'user_ZARRdzBBPFVt3pNmPuFYY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        setTimeout(function() {
            document.getElementById("alert").innerHTML = '';
        }, 3000);
        document.getElementById("alert").innerHTML = '정상적으로 접수되었습니다👋';
        e.target.reset();
    };
    return (
    <div className="get-in-touch container">
        <h1 className="title">문의하기</h1>
        <p id="alert" className="col-lg-12"> </p>
        <form encType="multipart/form-data" method="post" onSubmit={onSubmit} className="contact-form row">
            <div className="form-field col-lg-6">
                <input name="name" id="name" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="name">성함</label>
            </div>
            <div className="form-field col-lg-6">
                <select name="options" id="options" className="input-text js-input">
                    <option value=""></option>
                    <option value="배송문의">배송 문의</option>
                    <option value="환물문의">환불 문의</option>
                    <option value="수업문의">수업 문의</option>
                    <option value="상품문의">상품 문의</option>
                    <option value="기타문의">기타 문의</option>     
                </select>
                <label className="label" htmlFor="option">문의 사항</label>
            </div>    
            <div className="form-field col-lg-7">
                <input name="email" id="email" className="input-text js-input" type="email" required />
                <label className="label" htmlFor="email">이메일</label>
            </div>   
            <div className="form-field col-lg-12">
                <input name="phone" id="phone" className="input-text js-input" type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required />
                <label className="label" htmlFor="phone">전화번호</label>
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
