import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Header></Header>
        <Navigation></Navigation>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
