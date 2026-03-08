// ruta de los usarios
import { Router } from "express";
import { create_user_control } from "../controllers/user_control.js";

const user_routes = Router();

user_routes.post("/create_user", create_user_control);

export default user_routes;