import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import LoginPage from './LoginPage';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? <LoginPage /> : <LogoutButton />}
      <Profile />
    </div>
  );
};

export default App;
