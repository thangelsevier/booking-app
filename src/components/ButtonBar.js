import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import CartContext from '../contexts/CartContext';

class ButtonBar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        // cart popup
        const cart = this.context.storage;
        let items = [];
        for (const [id, product] of Object.entries(cart)) {
            items.push(<span>{product.name} x <Badge size="md" variant="dark">{product.quantity}</Badge> <br/></span>);
        }
        console.log(items);
        const cartPopover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Cart</Popover.Title>
                <Popover.Content>
                    {items}
                </Popover.Content>
            </Popover>
        );
        // total item display
        var totalItemCount = this.context.totalItemCount;

        return (
            <OverlayTrigger trigger="click" placement="right" overlay={cartPopover}>
                <Button variant="primary" size="lg">
                    <FontAwesomeIcon icon='cart-arrow-down' size="lg" />
                    <Badge size="lg" variant="light">
                        {totalItemCount}
                    </Badge>
                </Button>
            </OverlayTrigger>
        );
    }
}
ButtonBar.contextType = CartContext;

export default ButtonBar;