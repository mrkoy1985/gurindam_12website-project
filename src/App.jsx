import React from "react";
// import Sidebar from "./components/sidebar";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Login from "./Pages/Login";
import Jadwal from "./Pages/Jadwal";
// import NavigationBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayananOrientasi from "./Pages/layanan_orientasi";
import Layanan_informasi from "./Pages/Layanan_informasi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/jadwal" element={<Jadwal />}></Route>
          <Route path="/orientasi" element={<LayananOrientasi />}></Route>
          <Route path="/konsultasi" element={<Layanan_informasi />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
