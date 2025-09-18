
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Creature = sequelize.define("Creature", {
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  magical_power: { type: DataTypes.STRING },
});

export default Creature;
