import { useEffect, useState } from "react";
import api from "../services/api";
import "./CreatureList.css";

export default function CreatureList() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    api
      .get("/creatures")
      .then(res => setCreatures(res.data))
      .catch(err => console.error("Failed to fetch creatures:", err));
  }, []);

  return (
    <div className="creature-container">
      <h2>🦄 Creatures</h2>
      <ul className="creature-list">
        {creatures.map(c => (
          <li key={c.id}>
            {c.name} — {c.type} (Age: {c.age}, Power: {c.magical_power})
          </li>
        ))}
      </ul>
    </div>
  );
}
