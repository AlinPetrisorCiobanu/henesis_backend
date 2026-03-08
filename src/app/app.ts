import express from "express";
import user_routes from "../routes/user_routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/users", user_routes);

export default app;
