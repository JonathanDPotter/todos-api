import { Request, Response } from "express";

const errorHandler = (error: Error, _req: Request, res: Response) => {
  console.error(error);
  res.json({ name: error.name, msg: error.message });
};

export default errorHandler;
