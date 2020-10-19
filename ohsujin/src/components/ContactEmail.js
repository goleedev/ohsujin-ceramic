import React from 'react';

const ContactEmail = () => {
    return (
    <div className="get-in-touch container">
        <h1 className="title">문의하기</h1>
        <form className="contact-form row">
            <div className="form-field col-lg-6">
                <input id="name" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="name">성함</label>
            </div>
            <div className="form-field col-lg-6">
                <select name="options" id="option" className="input-text js-input">
                    <option value=""></option>
                    <option value="shipping">배송 문의</option>
                    <option value="refund">환불 문의</option>
                    <option value="class">수업 문의</option>
                    <option value="product">상품 문의</option>
                    <option value="etc">기타 문의</option>     
                </select>
                <label className="label" htmlFor="option">문의 사항</label>
            </div>    
            <div className="form-field col-lg-12">
                <input id="email" className="input-text js-input" type="email" required />
                <label className="label" htmlFor="email">이메일</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="message" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="message">문의 내용</label>
            </div>
            <div className="form-field col-lg-12">
                <input className="submit-btn" type="submit" value="보내기" />
            </div>
        </form>
    </div>
    )
}

export default ContactEmail;
