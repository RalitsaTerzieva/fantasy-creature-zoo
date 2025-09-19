import Creature from "./Creature.js";
import Habitat from "./Habitat.js";

Habitat.hasMany(Creature);
Creature.belongsTo(Habitat);

export { Creature, Habitat };