import { useQuery } from "@tanstack/react-query";
import { profileAPI } from "../services/api";
export const useProfile = () => {

return useQuery({

queryKey:["profile"],

queryFn: async ()=>{

const res =
await profileAPI.getMyProfile();

return res.data.user;

}

});

};