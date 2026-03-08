import express from "express";
import user_routes from "../routes/user_routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", user_routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
