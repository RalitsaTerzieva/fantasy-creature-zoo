import { Habitat } from "../models/index.js";

export const getHabitats = async (req, res) => {
  const habitats = await Habitat.findAll();
  res.json(habitats);
};