import React from 'react'

export default function LoginComponent() {
  return (
    <div class="login-page-container">
        <div class="form-column">
            <div class="card" data-step>
                <p class="welcome-header"><h1>Welcome!</h1></p>
                <p class="welcome-sub-header">Please sign in</p>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="button" class="button-login-style" data-login-button>Login</button>
            </div>
        </div>
        <div class="info-column">
            <img src="images/loginImage.jpg" class="info-image" alt="login image"/>
        </div>
    </div>
  )
}
