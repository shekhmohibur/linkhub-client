import { useState, useEffect } from "react";

import AuthContext from "./AuthContext";

import { authAPI } from "../services/api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  /* initialize auth */

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        try {
          const response = await authAPI.getProfile();

          setUser(response.data);
        } catch {
          localStorage.removeItem("authToken");
        }
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  /* login */

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);

      const { token, user: userData } = response.data;

      localStorage.setItem("authToken", token);

      setUser(userData);

      return { success: true };
    } catch (error) {
      return {
        success: false,

        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  /* register */

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);

      const {
        token,

        user: newUser,
      } = response.data;

      localStorage.setItem("authToken", token);

      setUser(newUser);

      return { success: true };
    } catch (error) {
      return {
        success: false,

        error: error.response?.data?.message || "Registration failed",
      };
    }
  };

  /* logout */

  const logout = () => {
    localStorage.removeItem("authToken");

    setUser(null);

    authAPI.logout().catch(() => {});
  };

  const value = {
    user,

    loading,

    login,

    register,

    logout,

    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
