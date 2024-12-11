import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Daftar.css";

// import Login from "./pages/Login";

function Daftar() {
  return (
    <div className="daftarpage">
      <div className="imageketiga">
        <img src="/src/assets/LogoBK.png" alt="registlogo" />
      </div>
      <div className="content">
        <Container
          className="formPage justify-content-center align-items-center"
          style={{ width: "500px" }}
        >
          <Row>
            <Col>
              <Form>
                <p className="juduldaf">Registrasi</p>
                <Form.Group
                  className="mb-3 custom-width"
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="Nama Lengkap.." />
                </Form.Group>
                <Form.Group
                  className="mb-3 custom-width"
                  controlId="formBasicPassword"
                >
                  <Form.Control type="password" placeholder="Jenis Kelamin.." />
                </Form.Group>
                <Form.Group
                  className="mb-3 custom-width"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Jurusan/Jabatan.."
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 custom-width"
                  controlId="formBasicPassword"
                >
                  <Form.Control type="password" placeholder="NIS/NIP.." />
                </Form.Group>
                <Form.Group
                  className="mb-3 custom-width"
                  controlId="formBasicPassword"
                >
                  <Form.Control type="password" placeholder="Email.." />
                </Form.Group>
                <Button variant="primary" type="Daftar">
                  <p className="regist">Daftar</p>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Daftar;
