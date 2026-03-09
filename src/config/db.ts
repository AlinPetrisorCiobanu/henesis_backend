import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection =
  process.env.NODE_ENV === "production"
    ? process.env.MYSQL_URL!
    : process.env.MYSQL_PUBLIC_URL!;

    if (!connection) {
      throw new Error("FAllO DE CONEXION");
    }
    
const db = knex({
  client: "mysql2",
  connection
});


export default db;