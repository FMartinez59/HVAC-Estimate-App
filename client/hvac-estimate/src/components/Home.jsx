// import { HiArrowNarrowRight } from "react-icons/hi";
import Popup from "./Popup";
import React, { useState } from 'react';
const Home = () => {
  

  const [showForm, setShowForm] = useState(false);
  const handleOnClose = () => setShowForm(false);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}    
    <h1 className="text-[#8892b0] py-4 max-w[700px]">
    Already know what you are looking for?
    </h1>
    
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-3">
          <button onClick={() => {setShowForm(true)}} className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
            Get A free Estimate Now
          </button>
        </div>
    </div>
    <Popup onCLose={handleOnClose} visible={showForm} handleForm={() => setShowForm(false)} />
  </div>
  );
};

export default Home;