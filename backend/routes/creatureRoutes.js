import express from "express";
import { getCreatures, addCreature, getCreatureById } from "../controllers/createController.js";

const router = express.Router();

router.get('/', getCreatures);
router.post('/', addCreature);
router.get('/profile-creature/:id', getCreatureById);

export default router;