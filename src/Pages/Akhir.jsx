import React from "react";
import "/src/Styles/Akhir.css";

function Akhir() {
  return (
    <div>
      <h1 className="awal">Pesan</h1>
      <div className="endwebsite">
        <img src="/src/assets/img.jpg" alt="gambarguru" className="fotoguru" />
        <div>
          <div className="inikanan">
            <div className="namaguru">
              <h3>Haryati Silitonga </h3>
              <p className="isibalasan">
                Semangat Adinda Desi, kamu luar biasa. Dengan situasi yang
                dialami.....
              </p>
              <p className="tgl">.06 Oktober 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="endwebsite">
        <img src="/src/assets/eko.jpeg" alt="gambarguru" className="fotoguru" />
        <div className="inikanan">
          <div className="namaguru">
            <h3>Eko Winarno </h3>
            <p className="isibalasan">
              Semangat Ananda Putra, seperti dengan konsultasi yang sudah
              pernah.....
            </p>
            <p className="tgl">.12 Oktober 2024</p>
          </div>
        </div>
      </div>
      <br></br>
      <h1 className="janjitemu">Janji Temu</h1>
      <div className="endwebsite">
        <img src="/src/assets/img.jpg" alt="gambarguru" className="fotoguru" />
        <div>
          <div className="inikanan">
            <div className="namaguru">
              <h3>Layanan Perorangan </h3>
              <p>Tanggal Konsultasi Disetujui</p>
              <p className="tgl">.12 November 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="endwebsite">
        <img src="/src/assets/eko.jpeg" alt="gambarguru" className="fotoguru" />
        <div className="inikanan">
          <div className="namaguru">
            <h3>Layanan Kelompok </h3>
            <p className="gagal">Ditolak/Jadwal Ulang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akhir;
