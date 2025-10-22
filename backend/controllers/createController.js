import { Creature, Habitat } from "../models/index.js";

export const getCreatures = async (req, res) => {
  const creatures = await Creature.findAll({ include: Habitat });
  res.json(creatures);
};

export const addCreature = async (req, res) => {
    try {
    const creature = await Creature.create(req.body);
    res.status(201).json(creature);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create creature" });
  }
};