// src/LoginPage.js
import React, { useEffect } from 'react';
import Auth0Lock from 'auth0-lock';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginPage.css';

const domain = "dev-cktlo4j40x6gduwt.us.auth0.com";
const clientId = "XJxZL8FdzvXmBY49OPx0RWpW39q7JlCE";

const LoginPage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    // 如果用户已登录且加载完成，则跳转到 profile 页面
    if (isAuthenticated) {
        console.log('hello ',isAuthenticated)
      window.location.href = `${window.location.origin}/profile`;
    }
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    const lock = new Auth0Lock(
      clientId,
      domain,
      {
        container: 'auth0-lock-container', // 使用容器的 ID 字符串
        auth: {
          redirectUrl: window.location.origin,
          responseType: 'token id_token',
          params: {
            scope: 'openid profile email',
          },
        },
        theme: {
          logo: 'icon.png',
          primaryColor: '#31324F',
        },
        languageDictionary: {
          title: "VideoLingo",
        },
      }
    );

    lock.show();

    // 清理 Lock 实例
    return () => lock.hide();
  }, []);

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
        {/* 为 Lock 组件容器指定一个 ID */}
        <div id="auth0-lock-container" className="auth0-lock-container"></div>
      </div>
    </div>
  );
};

export default LoginPage;
