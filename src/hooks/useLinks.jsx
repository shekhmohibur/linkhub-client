import { useQuery } from "@tanstack/react-query";

import { linksAPI } from "../services/api";

export const useLinks = () => {
  return useQuery({
    queryKey: ["links"],

    queryFn: async () => {
      const res = await linksAPI.getLinks();

      return res.data;
    },
  });
};
