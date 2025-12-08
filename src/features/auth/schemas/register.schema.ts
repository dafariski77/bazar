import { z } from "zod";

export const registerSchema = z.object({
  email: z.email(),
  name: z.string(),
  password: z.string(),
});
