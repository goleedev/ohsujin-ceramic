import React, { useState } from 'react'
import { authService } from 'fbase';
import AuthForm from 'components/AuthForm';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value }, } = event;
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
    return (
        <>
         <form onSubmit={onSubmit} className="form-signin auth-signin">
            <h1>Welcome</h1>
            <input
                name="email"
                type="email"
                placeholder="  Email"
                required
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
            <AuthForm />
            <input type="submit" className="form-signin btn btn-lg btn-primary btn-block" value={newAccount ? "가입하기" : "로그인"} />
            {error && <span className="authError">{error}</span>}
        </form>
        <span onClick={toggleAccount} className="form-alter mb-3 form-signin text-center">{newAccount ? "로그인" : "가입하기"}</span>   
        </>
    )
}

export default Auth;
