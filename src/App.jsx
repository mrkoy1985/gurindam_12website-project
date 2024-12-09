import React from 'react'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {

  return (
    <>

      <Navbar /> 
      <Home />
    </>
  );
}

export default App;
