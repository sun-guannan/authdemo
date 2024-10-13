import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-cktlo4j40x6gduwt.us.auth0.com";
const clientId = "XJxZL8FdzvXmBY49OPx0RWpW39q7JlCE";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    cacheLocation="localstorage" // 确保状态持久化
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
