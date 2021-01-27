import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from './globalStyle';
import { ToastProvider } from 'react-toast-notifications';

import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>
      <ToastProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
      </ToastProvider>

      <GlobalStyle />
    </>
  );
}
export default App;
