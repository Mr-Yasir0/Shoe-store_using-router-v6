import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import ShoesDetails from "./Components/ShoesDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const type = {
    Basketball: "Basketball",
    Football: "Football",
    Running: "Running",
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/ShoesDetails/:id" element={<ShoesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
