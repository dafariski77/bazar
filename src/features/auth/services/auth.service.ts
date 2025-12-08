import { supabase } from "@/shared/lib";
import { LoginSchemaType, RegisterSchemaType } from "../types";

export const signInWithEmail = async (body: LoginSchemaType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signUpWithEmail = async (body: RegisterSchemaType) => {
  const { data, error } = await supabase.auth.signUp({
    ...body,
    options: {
      data: {
        fullname: body.name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

export const logOutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  return;
};
