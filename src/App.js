import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Header></Header>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </BrowserRouter>

      {/* <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
      <Contact></Contact>
      <Login></Login> */}
    </div>
  );
}

export default App;
