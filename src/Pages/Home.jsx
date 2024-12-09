import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Image from "../assets/bg-dashboard.png";
import Elayanan from "../assets/Elayanan.png";
import Ejadwal from "../assets/Ejadwal.png";
import Ekonsultasi from "../assets/Ekonsultasi.png";
import '@fontsource/poppins'; // Mengimpor font Poppins
import '@fontsource/inter'; // Mengimpor font Inter (default: 400 normal weight)
import '@fontsource/inter/700.css'; // Jika Anda ingin menambahkan bobot 700 (bold)
import '../Styles/Home.css';

function Home() {
    return (
        <div>
            {/* Bagian Gambar Utama */}
            <div className="hero-section">
                <div className="image-container">
                    <img src={Image} alt="Landing dashboard" className="custom-img" />
                    <div className="text-overlay">
                        <h3>Segera Konsultasikan Ke BK</h3>
                        <h3>Privasi Aman, Masalah Teratasi</h3>
                    </div>
                </div>
            </div>

            {/* Grid Gambar dengan Row dan Col */}
            <Container className="opsi">
                <Row className="justify-content-start">
                    <Col xs={2} className="text-center image-col">
                        <a href="#Elayanan">
                            <img src={Elayanan} alt="Elayanan" className="rounded-circle grid-img" />
                        </a>
                    </Col>
                    <Col xs={2} className="text-center image-col">
                        <a href="#Ejadwal">
                            <img src={Ejadwal} alt="Ejadwal" className="rounded-circle grid-img" />
                        </a>
                    </Col>
                    <Col xs={2} className="text-center image-col">
                        <a href="#Ekonsultasi">
                            <img src={Ekonsultasi} alt="Ekonsultasi" className="rounded-circle grid-img" />
                        </a>
                    </Col>
                </Row>
            </Container>

            <div className="content">
                <h2>SMK Negeri 7 Batam</h2>
                <br />
                <p>Jl. S. Parman, RT.05/RW.01, Mangsang, Kec. Sei Beduk, Kota Batam,</p>
                <p>Kepulauan Riau 29433</p>
            </div>

        </div >
    );
}

export default Home;
