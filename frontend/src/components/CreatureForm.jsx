import { useState } from "react";
import api from "../services/api";
import "./CreatureForm.css"; 

export default function CreatureForm({ onAdded }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [magicalPower, setMagicalPower] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/creatures", {
        name,
        type,
        age: Number(age),
        magical_power: magicalPower,
      });
      setName("");
      setType("");
      setAge("");
      setMagicalPower("");
      onAdded(); // trigger refresh in parent
    } catch (err) {
      console.error("Failed to add creature:", err);
      alert("Error adding creature!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="creature-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Magical Power"
        value={magicalPower}
        onChange={(e) => setMagicalPower(e.target.value)}
      />
      <button type="submit">Add Creature</button>
    </form>
  );
}
