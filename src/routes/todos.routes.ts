import { Router } from "express";
import controller from "../controllers/todos.controller";

const router = Router();

router.get("/:user_id/:id?", controller.getUserTodosHandler);

router.post("/", controller.createTodoHandler);

router.put("/:id", controller.updateTodoHandler);

router.delete("/:id", controller.deleteTodoHandler);

export default router;
