import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './LoginPage';
import Profile from './Profile';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log('hello ',isAuthenticated)

  // 如果 Auth0 尚在加载用户身份状态时，显示加载状态
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* 默认主页 */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/profile" /> : <LoginPage />} />

        {/* 个人资料页面 */}
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
