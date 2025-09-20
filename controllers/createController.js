import { Creature, Habitat } from "../models/index.js";

export const getCreatures = async (req, res) => {
  const creatures = await Creature.findAll({ include: Habitat });
  res.json(creatures);
};