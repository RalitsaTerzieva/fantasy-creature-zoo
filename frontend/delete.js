import React, { useState, useEffect } from "react";

export default function Delete() {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch("http://localhost:4000/examples")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const save = (id) => {
    fetch(`http://localhost:4000/example/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName }),
    })
      .then((res) => res.json())
      .then(() => {
        setEditId(null);
        setEditName("");
        fetchItems(); // refresh after save
      });
  };

  return (
    <div>
      <h2>Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          {editId === item.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Edit name"
              />
              <button onClick={() => save(item.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{item.name}</span>
              <button
                onClick={() => {
                  setEditId(item.id);
                  setEditName(item.name);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
