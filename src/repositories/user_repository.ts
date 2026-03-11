
import db from "../config/db.js";
import type { User } from "../types/user_types.js";

export const UserRepository = {
  async create(user: User): Promise<User> {
    const [newUser] = await db<User>("users")
      .insert(user)
      .returning("*");

    return newUser!;
  },

  async findAll(): Promise<User[]> {
    return db<User>("users")
      .whereNull("deleted_at")
      .select("*");
  },

  async findById(id_user: number): Promise<User | null> {
    const user = await db<User>("users")
      .where({ id_user })
      .whereNull("deleted_at")
      .first();

    return user || null;
  },

  async update(id_user: number, data: Partial<User>): Promise<User | null> {
    const [updatedUser] = await db<User>("users")
      .where({ id_user })
      .update({
        ...data,
        modified_at: db.fn.now(),
      })
      .returning("*");

    return updatedUser || null;
  },

  async softDelete(id_user: number): Promise<void> {
    await db<User>("users")
      .where({ id_user })
      .update({
        deleted_at: db.fn.now(),
      });
  },
};