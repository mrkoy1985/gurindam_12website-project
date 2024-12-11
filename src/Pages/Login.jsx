import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Login.css";
import Daftar from "./Daftar";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="logpage">
      <div className="imagekedua">
        <img src="/src/assets/LogoBK.png" alt="loglogo" />
      </div>
      <div className="content">
        <Container
          className="formPage justify-content-center align-items-center"
          style={{ width: "500px" }}
        >
          <Row>
            <Col>
              <Form>
                <p className="judul">Masuk</p>

                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FaUser className="search-icon" />
                  </InputGroup.Text>
                  <Form.Control
                    className="tes"
                    type="text"
                    placeholder="Masukkkan NIS.. "
                  />
                </InputGroup>

                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FaLock className="search-icon" />
                  </InputGroup.Text>
                  <Form.Control
                    className="tes"
                    type="text"
                    placeholder="Masukkan Sandi.."
                  />
                </InputGroup>
                <p className="lupsan">Lupa Kata Sandi</p>
                <Button variant="primary" type="Masuk">
                  <Link to="/">
                    <p className="masuk">Masuk</p>
                  </Link>
                </Button>
                <div class="warna-kata">
                  <span class="kata-1">Belum punya akun?</span>
                  <span class="kata-2">
                    <a href="Daftar" component={Daftar}>
                      Daftar
                    </a>
                  </span>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
