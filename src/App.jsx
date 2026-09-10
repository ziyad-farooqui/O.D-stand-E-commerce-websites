import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import InsidCardHome from "./InsidCardHome";
import Other404 from "./Other404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<InsidCardHome />} />
        <Route path="*"  element={<Other404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
