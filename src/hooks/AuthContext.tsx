import React, { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
}

interface AuthContextData {
  token?: string;
  name: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToasts();
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Portifolio:token');

    if (token) {
      return { token };
    }

    return token;
  });

  return (
    <AuthContext.Provider value={{ name: 'Matheus' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const isAuthenticated = () => localStorage.getItem('@Portifolio:token');
