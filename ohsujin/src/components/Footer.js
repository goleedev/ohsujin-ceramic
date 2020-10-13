import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <span>더담다 | 충청남도 천안시 동남구 삼룡동 496 더담다 도예공방</span>
            <span>사업자번호: 183-35-00554 | 대표자: 오수진 | Phone: 070-4042-8642 | Email: o122419@naver.com</span>
            <span>&copy; Copyright {new Date().getFullYear()} 더담다 도예공방. All rights reserved.</span>
            <span>Admin</span>
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" className="logo" />
            </Link>
        </footer>
    )
}

export default Footer;
