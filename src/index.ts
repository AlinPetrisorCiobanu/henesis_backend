import dotenv from "dotenv";
import app from "./app/app.js";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});