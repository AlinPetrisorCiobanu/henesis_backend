import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user_repository.js";
import type { User } from "../types/user_types.js";
import dotenv from "dotenv";

dotenv.config();

const saltRounds = Number(process.env.SALT_ROUNDS);
const secretWord = process.env.SECRET_WORD!;

export const UserService = {

  async createUser(user: User): Promise<User> {

    const passwordWithPepper = user.password + secretWord;

    const hashedPassword = await bcrypt.hash(passwordWithPepper, saltRounds);

    const newUser = await UserRepository.create({
      ...user,
      password: hashedPassword
    });

    return newUser;
  },

  async getUsers(): Promise<User[]> {

    return UserRepository.findAll();

  },

  async getUserById(id_user: number): Promise<User | null> {

    return UserRepository.findById(id_user);

  },

  async updateUser(id_user: number, data: Partial<User>): Promise<User | null> {

    if (data.password) {
      const passwordWithPepper = data.password + secretWord;
      data.password = await bcrypt.hash(passwordWithPepper, saltRounds);
    }

    return UserRepository.update(id_user, data);

  },

  async deleteUser(id_user: number): Promise<void> {

    await UserRepository.softDelete(id_user);

  }

};