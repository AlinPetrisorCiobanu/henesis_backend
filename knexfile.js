import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  development: {
    client: "mysql2",
    connection: process.env.MYSQL_PUBLIC_URL, 
    migrations: {
      directory: path.resolve(__dirname, "src/database/migrations")
    }
  },
  production: {
    client: "mysql2",
    connection: process.env.MYSQL_URL,
    migrations: {
      directory: path.resolve(__dirname, "src/database/migrations")
    }
  }
};

export default config;