import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from 'fbase';
import leaf from '../images/leaf.png';
import leaf2 from '../images/leaf2.png';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
    const {
        target: { name, value },
    } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        };
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        let data;
        try {
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const { target: { name }, } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };
    return (
        <>
            <form onSubmit={onSubmit} className="form-signin auth-signin">
                <h1>Welcome</h1>
                <input
                    name="email"
                    type="email"
                    placeholder="  Email"
                    required
                    autoFocus
                    value={email}
                    onChange={onChange}
                    className="form-control"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="  Password"
                    required
                    value={password}
                    onChange={onChange}
                    className="form-control"
                />
                <span onClick={toggleAccount} className="form-signin btn btn-lg btn-primary btn-block">{newAccount ? "로그인하기" : "가입하기"}</span>
                <button onClick={onSocialClick} name="google" className="form-signin btn btn-lg btn-danger btn-block">
                    <FontAwesomeIcon icon={faGoogle} /> Google로 로그인 
                </button>
                <input type="submit" name="sign-in" className="mb-3 form-signin text-center" value={newAccount ? "가입하기" : "로그인하기"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <img src={leaf} data-aos="fade-right" data-aos-duration="1000" className="deco-leaf-1" />
            <img src={leaf2} data-aos-duration="1000" data-aos="fade-left" className="deco-leaf-2" />
        </>
    );
};

export default Auth;
