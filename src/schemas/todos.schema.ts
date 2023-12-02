import { object, string, boolean, TypeOf, number } from "zod";

const makeMessage = (parameter: string, type?: string) => {
  return `Parameter '${parameter}' ${
    type ? "must be a " + type + "." : "is required."
  }`;
};

export const todoInputSchema = object({
  title: string({
    required_error: makeMessage("title"),
    invalid_type_error: makeMessage("title", "string"),
  }),
  date: string({
    required_error: makeMessage("date"),
    invalid_type_error: makeMessage("date", "string"),
  }),
  complete: boolean({
    required_error: makeMessage("complete"),
    invalid_type_error: makeMessage("complete", "boolean"),
  }),
  user_id: number({
    required_error: makeMessage("user_id"),
    invalid_type_error: makeMessage("user_id", "number"),
  }),
});

export type TodoInput = TypeOf<typeof todoInputSchema>;
