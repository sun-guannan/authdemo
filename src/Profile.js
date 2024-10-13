// src/Profile.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css'; // 确保引入样式文件

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return <div>请先登录</div>;
  }

  return (
    <div className="profile-container">
      <h2>个人资料详情</h2>
      <div className="profile-avatar">
        <img src={user.picture} alt={user.name} />
        <button className="change-avatar-button">更换头像</button>
      </div>
      <div className="profile-info">
        <label>昵称</label>
        <input type="text" value={user.nickname || user.name} readOnly />
      </div>
      <div className="profile-bio">
        <label>个人简介</label>
        <textarea placeholder="添加个人简介"></textarea>
      </div>
      {/* 登出按钮 */}
      <button 
        className="logout-button" 
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        退出登录
      </button>
    </div>
  );
};

export default Profile;
