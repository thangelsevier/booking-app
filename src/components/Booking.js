import React, { Component } from 'react';
import ShoppingProduct from './ShoppingProduct';
import Progress from './Progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import ButtonBar from './ButtonBar';

import '../css/Booking.css';
import CheckOut from './CheckOut.js';

class Booking extends Component {
    constructor(props) {
        super(props);

        // init localStorage
        var stage;
 
        if (!props.stage) {
            stage = 1;
        } else {
            stage = props.stage
        }

        localStorage.setItem(
            'stage', stage
        );

        // state
        this.state = {
            stage: localStorage.getItem('stage') ?? stage
        };

        // using context
    }

    nextStage = () => {
        var stage = parseInt(localStorage.getItem('stage'));
        localStorage.setItem(
            'stage', stage + 1
        );
        this.setState({stage: stage + 1});
    }

    backStage = () => {
        var stage = parseInt(localStorage.getItem('stage'));
        localStorage.setItem(
            'stage', stage - 1
        );
        this.setState({stage: stage - 1});
    }

    render() {
        let buttons;
        console.log(this.state.stage);
        if (this.state.stage == 1) {
            buttons = <Button variant="success" size="lg" onClick={this.nextStage}>Next</Button>;
        }
        if (this.state.stage == 2) {
            buttons = <>
            <Button variant="success" size="lg" onClick={this.backStage}>Back</Button>
            <Button variant="success" size="lg" onClick={this.nextStage}>Next</Button>
            </>;
        }
        if (this.state.stage == 3) {
            buttons = <Button variant="success" size="lg" onClick={this.backStage}>Back</Button>;
        }
        
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
                            <ButtonBar></ButtonBar>
                            {buttons}
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
            return <CheckOut></CheckOut>;
        } else {
            return "";
        }
    }
}

export default Booking;