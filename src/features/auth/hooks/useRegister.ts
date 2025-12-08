import { useMutation } from "@tanstack/react-query";
import { signUpWithEmail } from "../services";

export const useRegister = () => {
  return useMutation({
    mutationFn: signUpWithEmail,
  });
};
