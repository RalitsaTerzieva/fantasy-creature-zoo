import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./CreatureProfile.css";

export default function CreatureProfile() {
  const { id } = useParams();
  const [creature, setCreature] = useState(null);

  useEffect(() => {
    api
      .get(`/creatures/profile-creature/${id}`)
      .then((res) => setCreature(res.data))
      .catch((err) => console.error("Failed to fetch creature:", err));
  }, [id]);

  if (!creature) return <p>Loading...</p>;

  return (
    <div className="creature-profile">
      <h2>{creature.name} 🐾</h2>
      <p><strong>Type:</strong> {creature.type}</p>
      <p><strong>Age:</strong> {creature.age}</p>
      <p><strong>Magical Power:</strong> {creature.magical_power}</p>
    </div>
  );
}
