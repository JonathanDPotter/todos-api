import { TodoInput } from "../schemas/todos.schema";
import query from "../utils/query";

export interface TodoDBInput extends TodoInput {
  date: string;
}

export const getUserTodos = async (user_id: string, id: string | undefined) => {
  try {
    return id
      ? await query("SELECT * FROM todos WHERE user_id=? AND id=?", [
          user_id,
          id,
        ])
      : await query("SELECT * FROM todos WHERE user_id=?", [user_id]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createTodo = async (data: TodoDBInput) => {
  try {
    return await query("INSERT INTO todos SET ?", [data]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateTodo = async (id: string, data: TodoDBInput) => {
  try {
    return await query("UPDATE todos SET ? WHERE id=?", [data, id]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    return await query("DELETE FROM todos WHERE id = ?", [id]);
  } catch (error: any) {
    throw new Error(error);
  }
};
