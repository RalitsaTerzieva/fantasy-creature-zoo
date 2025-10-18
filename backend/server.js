import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import "./models/index.js"; 
import creatureRoutes from "./routes/creatureRoutes.js";
import habitatRoutes from "./routes/habitatRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.use("/api/creatures", creatureRoutes);
app.use("/api/habitat", habitatRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced!");
    app.listen(4000, () => console.log("🚀 Server running on port 4000"));
  })
  .catch((err) => console.error("❌ Sync error:", err));


