import { authOrigin } from 'firebase-tools/lib/api';
import React, { _useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'


function Login() {
    //get the Stateee from the data layer ;)

    const [email, setEmail] = React.useState('');
    const [password, setPasword] = React.useState('');

    const signIn = e => {
        e.preventDefault(); //prevents the page from refreshing

        //firebase here
    }

    

    const register = e => {
        e.preventDefault(); //prevents the page from refreshing
        //firebase here
        auth
        .createUserWithEmailAndPassword(email, password)
        
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

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPasword(e.target.value)} />

                    <button type='submit' onClick={signIn} 
                    className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Ilie's AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login