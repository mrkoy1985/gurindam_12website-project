import React from "react";
import NavigationBar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import YoutubeEmbed from "../components/YoutubeEmbed";
import "../Styles/layananOrientasi.css";

const LayananOrientasi = () => {
  return (
    <div>
      <div className="col-auto">
        <div className="row">
          <NavigationBar />
          <div className="mt-5"></div> {/* Tambahkan jarak margin-top */}
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <YoutubeEmbed embedId="niHbUcxuDA8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananOrientasi;
