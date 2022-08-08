import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Homepage/>} />
        <Route path="/register" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
