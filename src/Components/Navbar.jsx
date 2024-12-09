import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Ikon profil FontAwesome
import '@fontsource/poppins'; // Mengimpor font Poppins
import Logo from '../assets/LogoBK.png';
import '../Styles/Navbar.css';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                {/* Untuk Logo */}
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="LogoBK"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Untuk Dropdown */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar ms-auto">
                        <Nav.Link href="#beranda">Beranda</Nav.Link>
                        <Nav.Link href="#layanan">Layanan</Nav.Link>
                        <Nav.Link href="#jadwal">Jadwal</Nav.Link>
                        <NavDropdown title="Konsultasi" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#layananperorangan">Layanan Perorangan</NavDropdown.Item>
                            <NavDropdown.Item href="#layanankelompok">Layanan Kelompok</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#historysaya">History Saya</Nav.Link>

                        {/* Untuk Search */}
                        <Form className="d-flex ms-2">
                            <Form.Control
                                type="search"
                                placeholder="Cari..."
                                className="me-2"
                                aria-label="Search"
                                style={{ border: '2px solid #fff', borderRadius: '4px', width: '200px' }}
                            />
                            <Button variant="outline-light">
                                <i className="bi bi-search"></i>
                            </Button>
                        </Form>

                        {/* Dropdown dengan Ikon FontAwesome */}
                        <NavDropdown
                            title={<FontAwesomeIcon icon={faUserCircle} size="2x" style={{ color: 'white' }} />} // Ikon profil FontAwesome 
                            id="basic-nav-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item href="#profil">Profil</NavDropdown.Item>
                            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
