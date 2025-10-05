import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import creatureRoutes from "./routes/creatureRoutes.js";
import habitatRoutes from "./routes/habitatRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("api/creatures", creatureRoutes);
app.use("api/habitat", habitatRoutes);

sequelize.sync().then(() => {
  console.log("✅ Database synced!");
  app.listen(5000, () => console.log("🚀 Server running on port 5000"));
});


