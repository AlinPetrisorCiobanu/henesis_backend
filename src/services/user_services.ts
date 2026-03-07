import type {User}  from "../types/user_types.js";

const users: User[] = [];

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};