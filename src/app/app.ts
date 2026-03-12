import express from "express";
import db from "../config/db.js";
import cors from "cors";
import userRoutes from "../routes/user_routes.js";
import projectRoutes from "../routes/project_routes.js";

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

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://www.henesis.es"
  ]
}));

app.use("/users", userRoutes);

app.use("/projects", projectRoutes);

export default app;