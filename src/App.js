import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Running from "./Components/Running";
import Football from "./Components/Football";
import Basketball from "./Components/Basketball";
import ShoesDetails from "./Components/ShoesDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/ShoesDetails/:id" element={<ShoesDetails />} />
        <Route path="/Running" element={<Running value={"Running"} />} />
        <Route
          path="/Basketball"
          element={<Basketball value={"Basketball"} />}
        />
        <Route path="/Football" element={<Football value={"Football"} />} />
      </Routes>
    </div>
  );
}

export default App;
