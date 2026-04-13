import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../services/api";
import { queryClient } from "../utils/queryClient";

export const useRegister = () => {
  return useMutation({
    mutationFn: authAPI.register,

    onSuccess: (res) => {
      localStorage.setItem(
        "authToken",

        res.data.token,
      );

      /* refetch logged user */

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
