import app from "./app/app.js";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;


// Healthcheck
app.get("/healthcheck", (req, res) => {
  res.json({
    status: "ok",
    msg: "Todo listo para las siguentes llamadas"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// const users = await db("users").select("*");
// console.log(users);