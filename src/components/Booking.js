import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Booking extends Component {
    render() {
        return (
            <div className="About">
              <Container fluid className="bg-dark">
                  <div className= "img-bg"></div>
                  <Jumbotron fluid className="bg-dark">
                    <h1>Sushi Booking</h1>
                    <span className="contact-span">
                    In a time when people become more and more busy with daily life, we do not have time to enjoy life and delicious food. <br/>
                    Sushi booking was born with a mission to help people enjoy the best quality sushi while saving time.<br/>
                    Join us now and enjoy your sushi.
                    </span>
                    <Row className="justify-content-md-center">
                      <Button variant="danger"><span><b><a href="/booking">Booking Now</a></b></span></Button> &nbsp;
                      <Button variant="success"><span><b><a href="/contact">Contact Us</a></b></span></Button>
                    </Row>
                  </Jumbotron>
              </Container>
            </div>
        );
    }
    
}

export default Booking;