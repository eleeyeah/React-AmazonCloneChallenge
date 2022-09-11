import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import app from './firebase';

function Login() {
    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert('User Logged In')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        alert(errorCode)
      });
       }

    const signUp = () => {
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            alert('User Registered')    
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode)
            // ..
          });
    
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

                <div >
                    <h5>E-mail</h5>
                    <input type="text" placeholder='please enter your email' onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" placeholder='please enter your password' onChange={(e) => setPassword(e.target.value)} />

                    <button type="text" className="login__signInButton" onClick={signIn}>Sign In</button>
                </div>

                <p>
                    By signing-in you agree to Ilie's AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={signUp}>Create your Amazon Account</button>

            </div>
        </div>
    )
}


export default Login;
