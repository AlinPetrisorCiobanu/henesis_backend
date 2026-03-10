import express from "express";
import db from "../config/db.js";

const app = express();

// Middlewares
app.use(express.json());

async function testDB() {
  try {
    await db.raw("SELECT 1");
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed", error);
  }
}

testDB();
// Healthcheck
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando 🚀"
  });
});

export default app;