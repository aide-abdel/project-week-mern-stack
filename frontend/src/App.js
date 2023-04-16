import * as React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exercises from "./pages/Exercises";
import LoginRegister from "./pages/LoginRegister";
import Meals from "./pages/Meals";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home xs={{ backgroundColor: "#000" }} />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
