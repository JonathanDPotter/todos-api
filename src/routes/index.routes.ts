import { Router } from "express";
import controller from "../controllers/index.controller";
import todoRoutes from "./todos.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.get("/", controller.getIndex);

router.get("/home", controller.redirectIndex);

router.get("/about", controller.getAbout);

router.get("/healthcheck", controller.getHealthcheck);

router.get("/routes", controller.getRoutes);

// add api routes

router.use("/api/todos", todoRoutes);

router.use("/api/users", usersRoutes);

router.all("/api/*", controller.getAPI404)

router.all("*", controller.get404);

export default router;
