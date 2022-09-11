import { useRef } from 'react'
import React, { _useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

   
    function submitHandler(e) {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const userData = {
            email: enteredEmail,
            password: enteredPassword
        };

        console.log(userData);

    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form onSubmit={submitHandler}>
                    <h5>E-mail</h5>
                    <input type="text" ref={emailInputRef} placeholder= 'please enter your email'/>

                    <h5>Password</h5>
                    <input type="password" ref={passwordInputRef} placeholder= 'please enter your password'/>

                    <button type='submit' 
                        className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Ilie's AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login