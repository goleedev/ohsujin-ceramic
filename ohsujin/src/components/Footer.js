import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container">
            <div className="col-lg-12">
                <span>
                    더담다 | 주소: 충청남도 천안시 동남구 삼룡동 496 더담다 도예공방<br/>
                    사업자등록번호: 183-35-00554 | 대표자: 오수진<br/>
                    통신판매: 제 2020-충남천안-199호<br/>
                    전화: 070-4042-8642 | 이메일: o122419@naver.com<br/>
                </span>
            </div>
            <Link to="/">
                <img src={logo} alt="logo" className="footer-logo logo" />
            </Link>
            <span id="copy">
                &copy; Copyright {new Date().getFullYear()} 더담다 도예공방. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer;
