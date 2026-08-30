import React, { useState } from "react";

import HomeNave from "./Homepage/HomeNave";
import HomeHeader from "./Homepage/HomeHeader";
import TrandingHome from "./Homepage/TrandingHome";
import FemaleClothesSection from "./Homepage/FemaleClothesSection";
import MaleClothesSection from "./Homepage/MaleClothesSection";
function App() {

  const [slowFemale, setSlowFemale] = useState(false);

  return (
    <>
      <HomeNave />
      <HomeHeader />
      <TrandingHome />
      <FemaleClothesSection />
      <MaleClothesSection/>
    </>
  );
}

export default App;