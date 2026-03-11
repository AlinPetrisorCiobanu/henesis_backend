// controlador de usuarios 
import type { Request, Response } from 'express';
import { UserService } from '../services/user_services.js';

export const UserController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  getUsers: async (req: Request, res: Response) => {
    const users = await UserService.getUsers();
    res.json(users);
  },

  getUserById: async (req: Request, res: Response) => {
    const user = await UserService.getUserById(Number(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  },

  updateUser: async (req: Request, res: Response) => {
    const updatedUser = await UserService.updateUser(Number(req.params.id), req.body);
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser);
  },

  deleteUser: async (req: Request, res: Response) => {
    await UserService.deleteUser(Number(req.params.id));
    res.status(204).send();
  },
};