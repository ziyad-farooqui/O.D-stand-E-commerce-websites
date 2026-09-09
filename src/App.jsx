import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import InsidCardHome from "./InsidCardHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<InsidCardHome />} />
        <Route path="*"  element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
