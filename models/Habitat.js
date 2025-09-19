import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Habitat = sequelize.define("Habitat", {
  name: { type: DataTypes.STRING, allowNull: false },
  environment: { type: DataTypes.STRING },
});

export default Habitat;
