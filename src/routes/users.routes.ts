import { Router } from "express";
import controller from "../controllers/users.controller";
import extractJWT from "../middleware/extractJWT";

const router = Router();

router.get("/:id?", controller.getUsersHandler);
router.post("/", controller.createUserHandler);
router.post("/login", controller.loginHandler);
router.post("/validate", extractJWT, controller.validateUserHandler);
router.put("/:id", controller.updateUserHandler);
router.delete("/:id", extractJWT, controller.deleteUserHandler);

export default router;
