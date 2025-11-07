import { useEffect, useState } from "react";
import api from "../services/api";
import CreatureForm from "./CreatureForm";
import "./CreatureList.css";

export default function CreatureList() {
  const [creatures, setCreatures] = useState([]);

  const fetchCreatures = () => {
    api
      .get("/creatures")
      .then((res) => setCreatures(res.data))
      .catch((err) => console.error("Failed to fetch creatures:", err));
  };

   useEffect(() => {
    fetchCreatures();
  }, []);

  return (
    <div className="creature-container">
      <h2>🦄 Creatures</h2>

      <CreatureForm onAdded={fetchCreatures} />

      <ul className="creature-list">
        {creatures.map(c => (
          <li key={c.id}>
            {c.name} — {c.type} (Age: {c.age}, Power: {c.magical_power})
            {c.name} — {c.type} ({c.Habitat?.name || "No habitat"})
          </li>
        ))}
      </ul>
    </div>
  );
}
