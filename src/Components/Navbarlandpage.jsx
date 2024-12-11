import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logobk.png";
import "../Styles/Daftar.css";

function NavigationBar() {
  return (
    <Navbar className="bg-navbar" data-bs-theme="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} width="40" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">
              <p className="text-login">Login</p>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
