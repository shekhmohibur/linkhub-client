import { useMutation } from "@tanstack/react-query";

import { profileAPI } from "../services/api";

import { queryClient } from "../utils/queryClient";

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: profileAPI.updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
};
