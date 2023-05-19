import './App.css';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      createBrowserRouter{
        createRoutesFromElements(
          <Route path='/' element={Home} />
        )
      }
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
      <Contact></Contact>
      <Login></Login>
    </div>
  );
}

export default App;
