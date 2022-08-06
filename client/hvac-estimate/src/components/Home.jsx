import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Popup from "./Popup";
import { useState } from 'react';
const Home = () => {
  
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        
        <h1 className="text-[#8892b0] py-4 max-w[700px]">
        Already know what you are looking for?
        </h1>

        <div className="text-white group border-2 px-6 py-3 my-2 flex items-center ">
          <button onClick={() => setButtonPopup(true)}>Get a free estimate here</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          
            </Popup>
        </div>
      </div>
    </div>
  );
};

export default Home;
