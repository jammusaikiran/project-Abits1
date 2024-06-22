import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const login = (username) => {
    setIsLoggedIn(true);
    setLoggedInUsername(username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loggedInUsername, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
