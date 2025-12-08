import { z } from "zod";
import { registerSchema } from "../schemas";

export type RegisterSchemaType = z.infer<typeof registerSchema>;
