import React from "react";
import NavigationBar from "../components/Navbar";
import Sidebar from "../components/sidebar";
// import YoutubeEmbed from "../components/YoutubeEmbed";
import poster from "../assets/BAHAYA1.png";
// import "../Styles/layananOrientasi.css";
import "../Styles/layananInformasi.css";

function Layanan_informasi() {
  return (
    <>
      <div>
        <div className="col-auto">
          <div className="row">
            <NavigationBar />
            <div className="mt-5"></div> {/* Tambahkan jarak margin-top */}
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <img src={poster} alt="asdasadasda" className="poto" />
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </>
  );
}

export default Layanan_informasi;
