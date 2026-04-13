import { useMutation } from "@tanstack/react-query";

import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../lib/firebase";

import { authAPI } from "../services/api";

import { queryClient } from "../utils/queryClient";

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: async () => {
      /* open google popup */

      const result = await signInWithPopup(auth, googleProvider);

      /* get firebase token */

      const firebaseToken = await result.user.getIdToken();

      /* send token to backend */

      const res = await authAPI.googleLogin(firebaseToken);

      return res;
    },

    onSuccess: (res) => {
      localStorage.setItem(
        "authToken",

        res.data.token,
      );

      /* refresh logged user */

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
