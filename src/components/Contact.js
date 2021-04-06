import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

import { Table } from 'react-bootstrap';

import '../css/Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked : false
        }
    }

    render() {
        var {isChecked} = this.state;
        return (
            <div>
                Day la trang lien he
                <br />
                <button type="button" className="btn btn-info" onClick={ () => this.onCick(false) }>Cho phep</button>&nbsp;
                <button type="button" className="btn btn-default" onClick={ () => this.onCick(true) }>Khong Cho phep</button>
                <Prompt 
                    when={isChecked}
                    message={ (location) => (`Ban chac chan muon di den ${location.pathname}`) }
                />
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr></tr>
                </thead>
              </Table>
            </div>
        );
    }

    onCick = (isChecked) => {
        this.setState({
            isChecked : isChecked
        });
    }
}

export default Contact;
