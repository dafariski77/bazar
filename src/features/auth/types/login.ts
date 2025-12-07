import { z } from "zod";
import { loginSchema } from "../schemas";

export type LoginSchemaType = z.infer<typeof loginSchema>;
