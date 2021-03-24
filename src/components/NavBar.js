import '../css/NavBar.css';
import About from './About'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Router>
        <Container fluid className="bg-dark">
          <Navbar bg="dark" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/booking">Booking</Nav.Link>
                <Nav.Link> <Link to="/about">About us </Link></Nav.Link>
              </Nav>
              <Form inline className="pd-5">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">English</NavDropdown.Item>
                <NavDropdown.Item href="#">Vietnamese</NavDropdown.Item>
                <NavDropdown.Item href="#">France</NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    </div>
  );
}

export default NavBar;
