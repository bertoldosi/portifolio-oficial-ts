import React, { createContext, useCallback } from 'react';
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

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Matheus', Login }}>
      {children}
    </AuthContext.Provider>
  );
};
