import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import '../css/Booking.css';

class Booking extends Component {
    render() {
        return (
            <div className="Booking">
              <Container fluid className="bg-secondary">
                <ul id="progressbar">
                    <li class="active" id="step1">
                        <strong>Step 1</strong>
                    </li>
                    <li id="step2"><strong>Step 2</strong></li>
                    <li id="step3"><strong>Step 3</strong></li>
                </ul>
                <div className="booking-content">
                    
                </div>
              </Container>
            </div>
        );
    }
    
}

export default Booking;