import { Router } from "express";
import * as ProjectController from "../controllers/project_controller.js";

const router = Router();

    router.post("/", ProjectController.createProject);
    router.get("/", ProjectController.getProjects);
    router.get("/:id", ProjectController.getProjectById);
    router.put("/:id", ProjectController.updateProject);
    router.delete("/:id", ProjectController.deleteProject);

export default router;