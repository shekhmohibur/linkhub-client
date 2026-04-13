import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../services/api";
import { queryClient } from "../utils/queryClient";


export const useLogin = () => {
  return useMutation({
    mutationFn: authAPI.login,

    onSuccess: (res) => {
      localStorage.setItem(
        "authToken",

        res.data.token,
      );

      /* refetch user */

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
