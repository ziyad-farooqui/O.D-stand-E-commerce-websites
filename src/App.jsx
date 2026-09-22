import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import InsidCardHome from "./InsidCardHome";
import Other404 from "./Other404";
import ProducPage from "./ProducPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<InsidCardHome />} />
        <Route path="*"  element={<Other404 />} />
        <Route path="/product" element={<ProducPage/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
