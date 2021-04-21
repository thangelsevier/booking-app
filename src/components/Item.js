import React, { Component } from 'react';
import { Image, Card, Badge, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/Item.css';
import CartContext from '../contexts/CartContext';

class Item extends Component {
    constructor(props) {
        super(props);
        const priceFormat = new Intl.NumberFormat('vn-VN',
                        { style: 'currency', currency: 'VND',
                          minimumFractionDigits: 3 });
        this.state = {
            price: priceFormat.format(props.item.price),
        }
    }

    render() {
        return <Card border="success" className="itemCard">
            <Card.Img className="itemImage" variant="top" src= {this.props.item.image} />
            <Card.Body>
                <Card.Title>{this.props.item.name}</Card.Title>
                <Card.Text>{this.props.item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                {this.state.price} <Badge variant="light">VND</Badge>
                <CartContext.Consumer>
                    {context => (
                        <Button variant="primary"  size="lg" onClick={() => context.addToCart(this.props.item)}>
                            <FontAwesomeIcon icon='cart-arrow-down' size="lg" />
                        </Button>
                    )}
                </CartContext.Consumer>
            </Card.Footer>
        </Card>
    }
}

Item.contextType = CartContext;

export default Item