import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import '../css/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container fluid className="bg-transparent description-content">
                    <h3>Welcome to</h3>
                    <h1>Sushi Booking</h1>
                    <span>Một ngày bận rộn, công việc chất đống không có thời gian để đến nhà hàng thưởng thức sashimi? <br/> Đừng lo vì đã có Sushi Booking với dịch vụ delivery tiện lợi với công nghệ đóng gói cao cấp, giúp lưu giữ độ tươi ngon của sashimi trong suốt quãng đường!</span><br/>
                    <Button variant="danger"><span><b><a href="/contact">Booking Now</a></b></span></Button> 
                </Container>
            </div>
        );
    }
}

export default Home;
