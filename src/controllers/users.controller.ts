import { NextFunction, Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  login,
  updateUser,
} from "../services/users.service";
import { newUserSchema } from "../schemas/users.schema";

const validateUserHandler = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.sendStatus(200);
  } catch (error: any) {
    next(error);
  }
};

const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const valid = newUserSchema.safeParse(req.body);

    if (valid.success) {
      const token = await login(req.body);
      return res.status(200).json(token);
    } else {
      return res.status(500).json(valid.error.errors);
    }
  } catch (error: any) {
    next(error);
  }
};

const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const valid = newUserSchema.safeParse(req.body);
    if (valid.success) {
      const user = await createUser(req.body);
      return res.status(201).json(user);
    } else {
      return res.status(500).json(valid.error.errors);
    }
  } catch (error: any) {
    next(error);
  }
};

const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const users = await getUsers(id);
    return res.status(200).json(users);
  } catch (error: any) {
    next(error);
  }
};

const updateUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const user = await updateUser(id, body);
    return res.status(200).json(user);
  } catch (error: any) {
    next(error);
  }
};

const deleteUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    return res.status(200).json(`Successfully deleted user`);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
};

export default {
  validateUserHandler,
  createUserHandler,
  loginHandler,
  getUsersHandler,
  updateUserHandler,
  deleteUserHandler,
};
