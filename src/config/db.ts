import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection =
  process.env.NODE_ENV === "production"
    ? process.env.MYSQL_URL
    : process.env.MYSQL_PUBLIC_URL;

if (!connection) {
  throw new Error("❌ Database URL not defined");
}

const db = knex({
  client: "mysql2",
  connection: connection as string,
  pool: {
    min: 0,
    max: 10,
  },
});

export default db;