import { Button, Col, Form } from "react-bootstrap";

import '../css/CheckOut.css';

const { Component } = require("react");

class CheckOut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Form className="checkoutForm">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email<span style={{color: "red"}}>*</span></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone number<span style={{color: "red"}}>*</span></Form.Label>
            <Form.Control type="phone" placeholder="Phone number" />
          </Form.Group>
        </Form.Row>
      
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address<span style={{color: "red"}}>*</span></Form.Label>
          <Form.Control placeholder="123 Cong Hoa" />
        </Form.Group>
      
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>District</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>D.1</option>
              <option>D.2</option>
              <option>D.3</option>
              <option>D.10</option>
              <option>D.12</option>
              <option>Tan Binh</option>
              <option>Binh Tan</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
    }
}

export default CheckOut;