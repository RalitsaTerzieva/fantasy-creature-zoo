import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db";
import creatureRoutes from "./routes/creatureRoutes";
import habitatRoutes from "./routes/habitatRoutes";

dotenv.config();
