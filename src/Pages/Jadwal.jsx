import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../components/Navbar";
import "../Styles/jadwal.css";

function Jadwal() {
  return (
    <div className="jadwal">
      <NavigationBar />
      <Form className="lebarJadwal">
        <p className="judul">Jadwal Bimbingan Konseling</p>
        <p>Silahkan Login dengan username dan password yang anda miliki</p>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Nama </Form.Label>
            <Form.Control id="disabledTextInput" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Kelas </Form.Label>
            <Form.Control id="disabledTextInput" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Jurusan </Form.Label>
            <Form.Control id="disabledTextInput" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Jenis Layanan </Form.Label>
            <Form.Select id="disabledSelect">
              <option>Perorangan</option>
              <option>Kelompok</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Tanggal </Form.Label>
            <br />
            <input type="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Can't check this"
            />
          </Form.Group>
          <Button type="submit">submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default Jadwal;
