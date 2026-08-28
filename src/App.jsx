import React, { useState } from "react";

import HomeNave from "./Homepage/HomeNave";
import HomeHeader from "./Homepage/HomeHeader";
import TrandingHome from "./TrandingHome";
import FemaleClothesSection from "./Homepage/FemaleClothesSection";

function App() {

  const [slowFemale, setSlowFemale] = useState(false);

  return (
    <>
      <HomeNave />
      <HomeHeader />

      <TrandingHome setSlowFemale={setSlowFemale} />

      <FemaleClothesSection slowFemale={slowFemale} />
    </>
  );
}

export default App;