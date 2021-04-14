import React, { Component } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import Item from './Item'

import '../css/ShoppingProduct.css'

const products = [
    {
        id: 1,
        name: 'Sashimi Ca Hoi',
        price: 250000,
        description: 'Sashimi Ca Hoi',
        image: 'https://hocnauantphcm.files.wordpress.com/2017/11/mon-sashimi.jpg?w=550'
    },
    {
        id: 2,
        name: 'Sashimi Ca Ngu',
        price: 150000,
        description: 'Sashimi Ca Ngu',
        image: 'https://www.thucphamsachhd.com/uploads/files/2019/09/09/e853b1a75de1b4bfedf0.jpg'
    },
    {
        id: 3,
        name: 'Ca Trich Ep Trung',
        price: 200000,
        description: 'Ca Trich Ep Trung',
        image: 'https://bizweb.dktcdn.net/100/021/951/products/foody-sushi-miya-849-635816657266398086.jpg?v=1502852608710'
    },
    {
        id: 4,
        name: 'Sashimi Ca Hoi',
        price: 150000,
        description: '',
        image: 'https://hocnauantphcm.files.wordpress.com/2017/11/mon-sashimi.jpg?w=550'
    },
    {
        id: 5,
        name: 'Sashimi Ca Hoi',
        price: 150000,
        description: '',
        image: 'https://hocnauantphcm.files.wordpress.com/2017/11/mon-sashimi.jpg?w=550'
    },
    {
        id: 6,
        name: 'Sashimi Ca Hoi',
        price: 150000,
        description: '',
        image: 'https://hocnauantphcm.files.wordpress.com/2017/11/mon-sashimi.jpg?w=550'
    }
]

class ShoppingProduct extends Component {

    constructor(props) {
        super(props);
        //this.nextStage = this.nextStage.bind(this);
    }
    componentDidMount() {
        
    }
 
    render() {
        return (
            <Row>
                {this.showProduct(products)}
            </Row>
        );
    }

    showProduct(products) {
        var result = null;

        result = products.map((product, index) => {
            return <Col md={4}><Item item={product}></Item></Col>
        });
 
        return result;
    }
}

export default ShoppingProduct;
