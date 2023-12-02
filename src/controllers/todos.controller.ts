import { Request, Response, NextFunction } from "express";
import {
  createTodo,
  deleteTodo,
  getUserTodos,
  updateTodo,
} from "../services/todos.service";
import { todoInputSchema } from "../schemas/todos.schema";

const getUserTodosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id, id } = req.params;
  try {
    return res.status(200).json(await getUserTodos(user_id, id));
  } catch (error: any) {
    next(error);
  }
};

const createTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const valid = todoInputSchema.safeParse(req.body);

    if (valid.success) {
      const todo = await createTodo(req.body);
      res.status(200).json(todo);
    } else {
      res.status(500).json(valid.error.errors);
    }
  } catch (error: any) {
    next(error);
  }
};

const updateTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const todo = await updateTodo(id, body);
    return res.status(200).json(todo);
  } catch (error: any) {
    next(error);
  }
};

const deleteTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await deleteTodo(id);
    return res.status(200).json(`Successfully deleted todo.`);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
};

export default {
  getUserTodosHandler,
  createTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
};
