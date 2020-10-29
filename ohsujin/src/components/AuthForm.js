import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";import { authService, firebaseInstance } from 'fbase';
import leaf from '../images/leaf.png';
import leaf2 from '../images/leaf2.png';

const AuthForm = () => {
const onSocialClick = async (event) => {
        const { target: { name }, } = event;
        let provider;

        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };
    return (
        <div>
            <button onClick={onSocialClick} name="google" className="form-signin btn btn-lg btn-danger btn-block">
                Google로 로그인 <FontAwesomeIcon icon={faGoogle} />
            </button>
            <img src={leaf} data-aos="fade-right" data-aos-duration="1000" className="deco-leaf-1" />
            <img src={leaf2} data-aos-duration="1000" data-aos="fade-left" className="deco-leaf-2" />
        </div>
    );
};

export default AuthForm;
