import { useMutation, useQuery } from "@tanstack/react-query";

import AuthContext from "./AuthContext";

import { authAPI } from "../services/api";

import { queryClient } from "../utils/queryClient";

const AuthProvider = ({ children }) => {
  /* observe user */

  const userQuery = useQuery({
    queryKey: ["user"],

    queryFn: async () => {
      const token = localStorage.getItem("authToken");

      if (!token) return null;

      const res = await authAPI.getProfile();

      return res.data.user;
    },

    retry: false,
  });

  /* email login */

  const loginMutation = useMutation({
    mutationFn: authAPI.login,

    onSuccess: (res) => {
      localStorage.setItem(
        "authToken",

        res.data.token,
      );

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  /* register */

  const registerMutation = useMutation({
    mutationFn: authAPI.register,

    onSuccess: (res) => {
      localStorage.setItem(
        "authToken",

        res.data.token,
      );

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  /* google login */

  const googleMutation = useMutation({
    mutationFn: authAPI.googleLogin,

    onSuccess: (res) => {
      localStorage.setItem(
        "authToken",

        res.data.token,
      );

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  /* logout */

  const logout = async () => {
    await authAPI.logout();

    localStorage.removeItem("authToken");

    queryClient.setQueryData(
      ["user"],

      null,
    );
  };

  return (
    <AuthContext.Provider
      value={{
        /* observed state */

        user: userQuery.data,

        isAuthenticated: !!userQuery.data,

        userLoading: userQuery.isLoading,

        /* actions */

        login: loginMutation.mutateAsync,

        register: registerMutation.mutateAsync,

        googleLogin: googleMutation.mutateAsync,

        logout,

        /* loading states */

        loginLoading: loginMutation.isPending,

        registerLoading: registerMutation.isPending,

        googleLoading: googleMutation.isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
