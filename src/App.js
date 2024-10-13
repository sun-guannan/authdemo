import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './LoginPage';
import Profile from './Profile';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const { isAuthenticated } = useAuth0();

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
