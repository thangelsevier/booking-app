import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className="bg-transparent description-content">
        <h3>Welcome to</h3>
        <h1>Sushi Booking</h1>
        <span>Một ngày bận rộn, công việc chất đống không có thời gian để đến nhà hàng thưởng thức sashimi? <br/> Đừng lo vì đã có Sushi Booking với dịch vụ delivery tiện lợi với công nghệ đóng gói cao cấp, giúp lưu giữ độ tươi ngon của sashimi trong suốt quãng đường!</span><br/>
        <Button variant="danger"><span><b>Booking Now</b></span></Button> 
      </Container>
    </div>
  );
}

export default App;
