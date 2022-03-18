import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './../libs/firebase'

export default function Error404Component() {
    const [isUser, setIsUser] = useState(false)
    let navigate = useNavigate();

    onAuthStateChanged(auth, (user)=>{
        if (user) {
            setIsUser(true)
        } else {  
            setIsUser(false)
        }
    })

    return (
        <div className="login-page-container">
            <div className="form-column">
                <div className="card" data-step>
                    <h1>Oops!</h1>
                    <h3>We can't seem to find the page you are looking for!</h3>
                    <h5>Please go back and try again. If the problem persists, please give us a call and we'll work with you and figure out what the problem is.</h5>
                    <button type="button" className="button-login-style" onClick={() => {
                        if(isUser) {
                            navigate("/dashboard");
                        } else {
                            navigate("/");
                        }
                    }}>Back Home
                    </button>
                </div>
            </div>
            <div className="info-column">
                <img src="images/warning.jpg" className="info-image" alt="404 error"/>
            </div>
        </div>
    )
}
