import express from "express";
import user_routes from "../routes/user_routes.js";
import db from "../config/db.js";

export default function app(port: number) {
  const app = express();

  app.use(express.json());
  app.use("/users", user_routes);

  // Healthcheck
  app.get("/healthcheck", async (req, res) => {
    try {
      await db.raw("SELECT 1"); // verificamos conexión a la DB
      res.status(200).json({
        status: "ok",
        db_connected: "✅ Database connected",
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        db_connected: "❌ Database connection failed",
        error: (err as Error).message,
      });
    }
  });

  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}