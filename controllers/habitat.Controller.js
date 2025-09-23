import { Habitat } from "../models/index.js";

export const getHabitats = async (req, res) => {
  const habitats = await Habitat.findAll();
  res.json(habitats);
};

export const addHabitat = async (req, res) => {
  const habitat = await Habitat.create(req.body);
  res.status(201).json(habitat);
};