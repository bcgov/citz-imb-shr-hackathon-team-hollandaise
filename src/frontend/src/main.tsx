import { KeycloakProvider } from '@bcgov/keycloak-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KeycloakProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </KeycloakProvider>
  </React.StrictMode>,
);
