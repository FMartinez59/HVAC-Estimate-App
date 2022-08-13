import Navbar from "./components/Navbar";
import Home from './components/Home'
import Popup from "./components/Popup";
import EstimateRes from "./components/EstimateRes";
// import { useState } from 'react';

function App() {
  return (
    <div >       
      <Navbar />
      <Home />
      <Popup />
      <EstimateRes/>  
    </div>
  );
}

export default App;
