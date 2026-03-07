// ruta de los usarios
import { Router } from "express";
import { create_user_control } from "../controllers/user_control.js";

const router = Router();

router.post("/users", create_user_control);

export default router;