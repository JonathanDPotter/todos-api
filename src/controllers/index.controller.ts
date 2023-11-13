import { Request, Response } from "express";
import path from "path";
import routes from "../routes/routes.json";

const getIndex = (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../static/index.html"));

const redirectIndex = (_req: Request, res: Response) => res.redirect("/");

const getAbout = (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../static/about.html"));

const getHealthcheck = (_req: Request, res: Response) => res.sendStatus(200);

const getRoutes = (_req: Request, res: Response) =>
  res.status(200).json(routes);

const getAPI404 = (_req: Request, res: Response) =>
  res.status(404).json("No resource at this endpoint");

const get404 = (_req: Request, res: Response) =>
  res.status(404).sendFile(path.join(__dirname, "../static/404.html"));

export default {
  getIndex,
  redirectIndex,
  getAbout,
  getHealthcheck,
  getRoutes,
  getAPI404,
  get404,
};
