import * as React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exercises from "./pages/Exercises";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home xs={{ backgroundColor: "#000" }} />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
