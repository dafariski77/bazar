import { supabase } from "@/shared/lib";
import { LoginSchemaType } from "../types";

export const signInWithEmail = async (body: LoginSchemaType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  if (error) throw new Error(error.message);

  return data;
};
