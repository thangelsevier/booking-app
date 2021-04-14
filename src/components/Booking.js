import React, { Component } from 'react';
import ShoppingProduct from './ShoppingProduct';
import Progress from './Progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

import '../css/Booking.css';

class Booking extends Component {
    constructor(props) {
        super(props);
        var stage;
        if (!props.stage) {
            stage = 1;
        } else {
            stage = props.stage
        }
        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) ?? {itemt: []},
            stage: localStorage.getItem('stage') ?? stage
        };

        localStorage.setItem(
            'cart', JSON.stringify({items:[1,2,3,4]})
        );
        localStorage.setItem(
            'stage', stage
        );
        console.log(this.state.stage);
    }

    nextStage = () => {
        var stage = localStorage.getItem('stage');
        localStorage.setItem(
            'stage', stage + 1
        );
        this.setState({stage: stage + 1});
    }

    render() {
        return (
            <div className="Booking">
              <Container fluid>
                <Progress stage = {this.state.stage}></Progress>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className="bg-secondary">
                        <div className="booking-content">
                            {this.contentByStage(this.state.stage)}
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className="actionBar float-right bg-secondary">
                        <Button variant="primary">
                            <FontAwesomeIcon icon='cart-arrow-down' size="lg" />
                            <Badge size="lg" variant="light">{this.state.cart.items.length}</Badge>
                        </Button>
                        <Button variant="success" size="lg" onClick={this.nextStage}>Next</Button>
                    </Col>
                    <Col md={1}></Col>
                </Row>
              </Container>
            </div>
        );
    }
    
    contentByStage = (stage) => {
        if (stage == 1) {
            return <ShoppingProduct></ShoppingProduct>;
        } else if (stage == 2) {
            return "";
        } else {
            return "";
        }
    }
}

export default Booking;