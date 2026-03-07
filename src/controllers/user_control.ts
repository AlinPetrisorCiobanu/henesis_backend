// controlador de usuarios 
import type { Request, Response } from "express";
import { createUser } from "../services/user_services.js";
import type { User } from "../types/user_types.js";

export const createUserController = (req: Request, res: Response) => {
  const user: User = req.body;
  const newUser = createUser(user);
  res.status(201).json(newUser);
};