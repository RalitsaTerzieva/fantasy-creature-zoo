import CreatureList from "./components/CreatureList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Fantasy Creature Zoo 🐉</h1>
        <Routes>
          <Route path="/" element={<CreatureList />} />

          <Route path="/creature/:id" element={<CreatureProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
