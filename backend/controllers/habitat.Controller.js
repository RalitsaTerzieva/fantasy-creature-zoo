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