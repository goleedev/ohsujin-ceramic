import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from 'fbase';
import AuthForm from 'components/AuthForm';
import Admin from './Admin';

const Auth = () => {
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
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name="google">
                    <FontAwesomeIcon icon={faGoogle} /> Google로 로그인 
                </button>
            </div>
            <Admin />
        </div>
    );
};

export default Auth;
