import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CardNavbar from './InsideCard/CardNavbar';
import CarditenmImahe from './InsideCard/CarditenmImahe';
import CardTheDetail from './InsideCard/CardTheDetail';
import CardImageforMobile from './InsideCard/CardImageforMobile';


const InsidCardHome = () => {
 
  const [colorName, setcolorName] = useState('');







  return (
    <div className="border  border-gray-500 bg-gray-300 h-screen w-full flex flex-col ">



      <CardNavbar/>

      <CarditenmImahe />
      <CardImageforMobile />

      <CardTheDetail />


    </div>
  );
};

export default InsidCardHome; 
