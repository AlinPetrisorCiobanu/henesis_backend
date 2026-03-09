import express from "express";
import user_routes from "../routes/user_routes.js";
import db from "../config/db.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", user_routes);

async function testDB() {
  try {
    await db.raw("SELECT 1");
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

app.get("/healthcheck", async (req, res) => {
  try {
    // Intentamos hacer una consulta simple
    await db.raw("SELECT 1");
    
    res.status(200).json({
      status: "ok",
      db_connected: "✅ Database connected"
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      db_connected: "❌ Database connection failed:",
      error: (err as Error).message
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


testDB()
export default app;
