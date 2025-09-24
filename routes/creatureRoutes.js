import express from "express";
import { getCreatures, addCreature } from "../controllers/createController";

const router = express.Router();

router.get('/', getCreatures);
router.post('/', addCreature);

export default router;