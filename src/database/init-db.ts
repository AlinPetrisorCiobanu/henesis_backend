import mysql from "mysql2/promise";

async function initDatabase() {
  // Conexión sin especificar base de datos
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "", // tu password
  });

  // Crear base de datos si no existe
  await connection.query("CREATE DATABASE IF NOT EXISTS henesis CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

  console.log("Base de datos 'henesis' lista");

  await connection.end();
}

initDatabase().catch((err) => {
  console.error("Error creando la base de datos:", err);
  process.exit(1);
});