import express from "express";
import { getHabitats, addHabitat } from "../controllers/habitat.Controller.js";

const router = express.Router();

router.get("/", getHabitats);
router.post("/", addHabitat);

export default router;