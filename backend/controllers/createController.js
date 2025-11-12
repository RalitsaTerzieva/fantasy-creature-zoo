import * as creatureService from "../services/creatureCreature.js"

export const getCreatures = async (req, res) => {
  try {
    const creatures = await creatureService.getAllCreatures();
    res.json(creatures);
  } catch (err) {
    next(err);
  }
};

export const addCreature = async (req, res) => {
  try {
    const newCreature = await creatureService.createCreature(req.body);
    res.status(201).json(newCreature);
  } catch (err) {
    next(err);
  }
};

export const getCreatureById = async (req, res) => {
  try {
    const creature = await creatureService.getCreatureById(req.params.id);
    res.json(creature);
  } catch (err) {
    next(err);
  }
};