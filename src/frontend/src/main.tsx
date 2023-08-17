import { KeycloakProvider } from '@bcgov/keycloak-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KeycloakProvider>
      <App />
    </KeycloakProvider>
  </React.StrictMode>,
);
