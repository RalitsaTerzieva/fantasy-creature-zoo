import { Habitat } from "../models/index.js";

export const getHabitats = async (req, res) => {
  const habitats = await Habitat.findAll();
  res.json(habitats);
};

export const addHabitat = async (req, res) => {
  try {
    const habitat = await Habitat.create(req.body);
    res.status(201).json(habitat);
  } catch (err) {
    console.error("Failed to add habitat:", err);
    res.status(500).json({ error: "Failed to create habitat" });
  }
};

export const getCreatureById = async (req, res) => {
  try {
    const { id } = req.params;
    const creature = await Creature.findByPk(id, { include: Habitat });
    if (!creature) {
      return res.status(404).json({ error: "Creature not found" });
    }
    res.json(creature);
  } catch (err) {
    console.error("Failed to fetch creature:", err);
    res.status(500).json({ error: "Failed to fetch creature" });
  }
};