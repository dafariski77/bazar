import { useMutation } from "@tanstack/react-query";
import { logOutUser } from "../services";

export const useLogout = () => {
  return useMutation({
    mutationFn: logOutUser,
  });
};
