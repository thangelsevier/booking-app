import React, { Component } from 'react';
import { Image, Card, Badge } from 'react-bootstrap';

import '../css/Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Card border="success" className="itemCard">
            <Card.Img className="itemImage" variant="top" src= {this.props.item.image} />
            <Card.Body>
                <Card.Title>{this.props.item.name}</Card.Title>
                <Card.Text>{this.props.item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                {this.props.item.price} <Badge variant="light">VND</Badge>
            </Card.Footer>
            {/* <div className="itemImage">
            </div>
            <div className="itemName">
                {this.props.item.name}
            </div>
            <div className="itemPrice">
                {this.props.item.price}
            </div>
            <div className="itemDescription">
                {this.props.item.description}
            </div> */}
        </Card>
    }
}

export default Item