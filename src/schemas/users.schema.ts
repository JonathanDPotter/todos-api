import { object, string, TypeOf } from "zod";

export const newUserSchema = object({
  username: string({
    required_error: "Name is required",
  }),
  password: string({
    required_error: "Password is required",
  }).min(6, "Password too short - should be 6 chars minimum"),
});

export type NewUserInput = TypeOf<typeof newUserSchema>;
