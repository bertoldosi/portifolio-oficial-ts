import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/api-adonis';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  Login(credentials: LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const Login = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions/', {
      email,
      password,
    });

    const token = response.data;
    localStorage.setItem('@Portifolio:token', token);

    return token;
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Matheus', Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const isAuthenticated = () => localStorage.getItem('@Portifolio:token');

