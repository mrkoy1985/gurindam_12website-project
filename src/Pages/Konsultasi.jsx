import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../components/Navbar";
import "../Styles/konsultasi.css";

function Konsultasi() {
  return (
    <div className="konsultasi">
      <NavigationBar />
      <Form className="lebarJadwal">
        <p className="judul">Jadwal Bimbingan Konseling</p>
        <p>Silahkan Login dengan username dan password yang anda miliki</p>
        <fieldset>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit">submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default Konsultasi;
