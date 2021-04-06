import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import '../css/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container fluid className="bg-transparent description-content">
                    <h4>Welcome to</h4>
                    <h1>Sushi Booking</h1>
                    <span>You are stucking on a busy day but still wanna enjoy sashimi? <br/>
                    Sushi Booking here with convenient delivery services, keep the highest quality of each slides!</span><br/><br/>
                    <Button variant="danger"><span><b><a href="/contact"><FontAwesomeIcon icon="cart-plus"/> Booking Now</a></b></span></Button> 
                </Container>
            </div>
        );
    }
}

export default Home;
