import React from "react";
import "/src/Styles/Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="landing-content">
        <div className="left-content">
          <h1>PERLUKAH BIMBINGAN KONSELING DI SEKOLAH ANDA? </h1>
          <p>
            Membantu individu memahami diri sendiri, termasuk minat,bakat,
            nilai, kekuatan, dan kelemahan.
          </p>
        </div>
        <div className="right-content">
          <img
            src="/src/assets/bkdepan.png"
            alt="gambardepan"
            className="landingimage"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
