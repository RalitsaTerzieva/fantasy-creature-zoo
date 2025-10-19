import sequelize from "./config/db.js";
import Creature from "./models/Creature.js";

await sequelize.sync({ force: true }); // recreate tables

await Creature.bulkCreate([
  { name: "Fire Dragon", type: "Dragon", age: 500, magical_power: "Fire breath" },
  { name: "Unicorn", type: "Horse", age: 120, magical_power: "Healing horn" },
  { name: "Phoenix", type: "Bird", age: 999, magical_power: "Rebirth from ashes" },
]);

console.log("✨ Creatures added!");
process.exit();
