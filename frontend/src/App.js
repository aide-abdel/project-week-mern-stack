import * as React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exercises from "./pages/Exercises";
import LoginRegister from "./pages/LoginRegister";
import Meals from "./pages/Meals";
import Bmi from "./components/calculators/Bmi";
import Bfi from "./components/calculators/Bfi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home xs={{ backgroundColor: "#000" }} />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/calculators/bmi" element={<Bmi />} />
        <Route path="/calculators/bfi" element={<Bfi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
