// src/LoginPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginPage.css';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="branding">
          <img src="icon.png" alt="Video Lingo Logo" className="logo" />
          <h1>VideoLingo</h1>
          <p>连接世界的每一帧</p>
          <footer>VideoLingo © 2023-2024</footer>
        </div>
      </div>
      <div className="right-panel">
        <div className="login-form">
          <h2>登录您的帐户</h2>
          <p>请使用您的电子邮箱和密码登录</p>
          <button
            className="login-button"
            onClick={() => loginWithRedirect({ screen_hint: 'login' })}
          >
            登录
          </button>
          <div className="options">
            <a href="#" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
              前往创建
            </a>
            <a href="#">忘记密码</a>
          </div>
          <p>或继续使用</p>
          <button
            className="social-login google"
            onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
          >
            Google
          </button>
          <p>点击继续，即表示您同意我们的使用条款和隐私政策</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
