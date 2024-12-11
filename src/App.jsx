import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbarlandpage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import Footer from "./Pages/Footer";
import Daftar from "./Pages/Daftar";

function App() {
  return (
    <>
      <BrowserRouter BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
