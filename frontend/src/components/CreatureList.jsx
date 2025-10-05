import { useEffect, useState } from "react";
import api from "../services/api";

export default function CreatureList() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    api.get("/creatures").then(res => setCreatures(res.data));
  }, []);

  return (
    <div>
      <h2>🦄 Creatures</h2>
      <ul>
        {creatures.map(c => (
          <li key={c.id}>{c.name} — {c.type} ({c.Habitat?.name})</li>
        ))}
      </ul>
    </div>
  );
}