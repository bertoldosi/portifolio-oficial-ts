import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from './globalStyle';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
export default App;
