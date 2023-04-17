import * as React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exercises from "./pages/Exercises";
import LoginRegister from "./pages/LoginRegister";
import Meals from "./pages/Meals";
import Bmi from "./components/calculators/Bmi";
import Bfi from "./components/calculators/Bfi";
import Cb from "./components/calculators/Cb";
import Dcc from "./components/calculators/Dcc";
import Orm from "./components/calculators/Orm";
import Workouts from "./pages/Workouts";
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
        <Route path="calculators/cb" element={<Cb />} />
        <Route path="calculators/dcc" element={<Dcc />} />
        <Route path="calculators/orm" element={<Orm />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
