import { createRoot } from "react-dom/client";
import React from "react";
import App from './app.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
  );