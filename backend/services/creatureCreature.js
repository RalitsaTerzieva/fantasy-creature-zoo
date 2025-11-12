import { Creature, Habitat } from "../models/index.js";

export const getAllCreatures = async () => {
  return await Creature.findAll({ include: Habitat });
};


export const createCreature = async (data) => {
  // Here you could also validate, log, or transform the data later
  const creature = await Creature.create(data);
  return creature;
};

export const getCreatureById = async (id) => {
  const creature = await Creature.findByPk(id, { include: Habitat });
  if (!creature) {
    const error = new Error("Creature not found");
    error.status = 404;
    throw error;
  }
  return creature;
};