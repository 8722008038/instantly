import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store logged in user
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  // Load tokens/user from localStorage (if available) on first render
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("accessToken");

      if (savedUser && savedUser !== "undefined" && savedToken) {
        setUser(JSON.parse(savedUser));
        setAccessToken(savedToken);
      }
    } catch (err) {
      console.error("Failed to parse user from localStorage:", err);
      localStorage.removeItem("user"); // clean bad data
      localStorage.removeItem("accessToken");
    }
  }, []);

  // Save to localStorage whenever login happens
  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const value = { user, accessToken, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
