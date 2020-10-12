import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from 'fbase';
import Admin from './Admin';

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
            <form onSubmit={onSubmit} className="form-signin">
                <h1>{}</h1>
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
                <span onClick={toggleAccount} className="form-signin btn btn-lg btn-primary btn-block">{newAccount ? "Sign In" : "Create Account"}</span>
                <button onClick={onSocialClick} name="google" className="form-signin btn btn-lg btn-danger btn-block">
                    <FontAwesomeIcon icon={faGoogle} /> Google로 로그인 
                </button>
                <Admin />
                <input type="submit" name="sign-in" className="mb-3 form-signin text-center" value={newAccount ? "Create Account" : "Log In"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <div>
                
                <p className="mt-5 mb-3 text-muted text-center">&copy; {new Date().getFullYear()}</p>
            </div>
        </>
    );
};

export default Auth;
