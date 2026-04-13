import { useQuery, useMutation } from "@tanstack/react-query";
import { profileAPI } from "../services/api";
import { queryClient } from "../utils/queryClient";

export const useSettings = () => {
  /* load user settings */

  const query = useQuery({
    queryKey: ["user"],

    queryFn: async () => {
      const res = await profileAPI.getMyProfile();

      return res.data.user;
    },
  });

  /* update */

  const mutation = useMutation({
    mutationFn: profileAPI.updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  /* unified update function */

  const update = (field, value) => {
    mutation.mutate({
      [field]: value,
    });
  };

  return {
    settings: {
      username: query.data?.username || "",

      isPublic: query.data?.isPublic ?? true,

      allowIndexing: query.data?.allowIndexing ?? true,

      emailNotifications: query.data?.emailNotifications ?? false,

      twoFactor: query.data?.twoFactor ?? false,
    },

    update,

    loading: query.isLoading,
  };
};
