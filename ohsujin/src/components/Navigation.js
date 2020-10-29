import React, { useState } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({userObj}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar navbar-expand-lg navbar-light rounded container">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="logo" alt="logo"/>
            </Link>
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarsExample09">
                <div className="nav-items row">
                    <Link className="nav-link" to="/about">ABOUT ME</Link>
                    <Link className="nav-link" to="/class">CLASS</Link>
                    <a className="nav-link" href="https://smartstore.naver.com/thedamda_ceramic" target="_blank">
                        STORE
                    </a>
                    <Link className="nav-link" to="/contact">CONTACT ME
                    {/* <span>|</span> */}
                    </Link>
                    {/* <div className="nav-top row">
                        <Link className="nav-link" to="/login">
                            <FontAwesomeIcon icon={faUser} color={"#555555"} size="2x" />
                        </Link>
                        <Link className="nav-link" to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} color={"#555555"} size="2x" />
                        </Link>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
