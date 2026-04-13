import { useQuery } from "@tanstack/react-query";
import { authAPI } from "../services/api";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],

    queryFn: async () => {
      const token = localStorage.getItem("authToken");

      if (!token) return null;

      const res = await authAPI.getProfile();

      return res.data.user;
    },

    retry: false,

    staleTime: 1000 * 60 * 10, // 10 minutes

    refetchOnWindowFocus: false,
  });
};
