import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";

const router = Router();
const projectController = new ProjectController();

router.get("/", projectController.getAll);
router.post("/", projectController.create);

export default router;