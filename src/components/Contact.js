import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-bootstrap';
import { Table, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import map from "../img/sushi_map.jpg";

import '../css/Contact.css';

class Contact extends Component {
    render() {
        return (
          <div className="Contact">
            <Container fluid className="bg-dark">
                <div className= "contact-img-bg"></div>
                <Table className="contact-table" striped hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <td width="25%"></td>
                            <td width="25%"><FontAwesomeIcon icon="phone-volume"/> Phone: <Button variant="secondary">+84368639868</Button></td>
                            <td rowSpan="3">
                                <FontAwesomeIcon icon="building"/> Address: <Button variant="secondary">123 Cong Hoa street, Tan Binh district, HCM city.</Button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><FontAwesomeIcon icon="envelope-open"/> Email: <Button variant="info">thangtd.dev@gmail.com</Button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><FontAwesomeIcon icon="fax"/> Fax: <Button variant="light">+85368639868</Button></td>
                        </tr>
                    </thead>
                </Table>
                {/* <div className="contact-map"></div> */}
                <Image src={map} thumbnail />
            </Container>
          </div>
        );
      }
}

export default Contact;
