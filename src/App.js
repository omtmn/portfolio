import './App.css';
import { useState } from 'react'
import Home from './views/Home'
import Login from './views/Login'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom' 
// v6 no longer uses switch, and now Routes. no longer needs exact either

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Login/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
