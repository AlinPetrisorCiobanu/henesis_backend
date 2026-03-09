import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {

  development: {
    client: "mysql2",
    connection: process.env.MYSQL_PUBLIC_URL,
    migrations: {
      directory: path.resolve(__dirname, "./database/migrations")
    }
  },

  production: {
    client: "mysql2",
    connection: process.env.MYSQL_URL,
    migrations: {
      directory: path.resolve(__dirname, "./database/migrations")
    }
  }

};