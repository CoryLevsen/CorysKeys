import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from './../libs/firebase'

import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginComponent() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        
        <div className="login-page-container">
            <div className="form-column">
                <h1>Cory's Keys</h1>
                <div className="card" data-step>
                    
                    <h2>Welcome!</h2>
                    <h3><i>Please sign in</i></h3>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input required type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input required type="password" name="password" id="password" />
                    </div>
                    <button type="button" className="button-login-style" onClick={() => {
                        signInWithEmailAndPassword(auth, email, password)
                        .then(userCredential=>{
                            //navigate("/dashboard");

                            console.log(userCredential)
                        })
                        .catch(error=>{
                            console.log(error)
                        })
                    }}>Login
                    </button>

                    <a href='/'>Don't have an account? Create one!</a>
                    <ToastContainer />
                </div>
            </div>
            <div className="info-column">
                <img src="images/loginImage.jpg" className="info-image" alt="login"/>
            </div>
        </div>
    )
}
