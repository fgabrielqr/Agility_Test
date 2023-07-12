import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const validateCredentials = (email, password) => {
    const validEmail = "agility@agility.com";
    const validPassword = "teste987";

    if (email === validEmail && password === validPassword) {
      return true;
    } else {
      return false;
    }
  };

  const login = (email, password) => {
    const isAuthenticated = validateCredentials(email, password);

    if (isAuthenticated) {
      console.log("Usuário autenticado! Redirecionando...");
      const loggedInUser = { email };
      setUser(loggedInUser);
      navigate("/");
    } else {
      alert("Login ou Senha incorreta. Por favor verifique seus dados.");
    }
  };

  const logout = () => {
    console.log("Usuário deslogado! Redirecionando...");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
