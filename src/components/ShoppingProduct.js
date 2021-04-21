import React, { Component } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import Item from './Item'

import '../css/ShoppingProduct.css'
import CartProvider from '../contexts/CartContext';

const products = [
    {
        id: 'id_1',
        name: 'Sashimi Ca Hoi',
        price: 250000,
        description: 'Sashimi Ca Hoi',
        image: 'https://hocnauantphcm.files.wordpress.com/2017/11/mon-sashimi.jpg?w=550'
    },
    {
        id: 'id_2',
        name: 'Sashimi Ca Ngu',
        price: 150000,
        description: 'Sashimi Ca Ngu',
        image: 'https://www.thucphamsachhd.com/uploads/files/2019/09/09/e853b1a75de1b4bfedf0.jpg'
    },
    {
        id: 'id_3',
        name: 'Ca Trich Ep Trung',
        price: 200000,
        description: 'Ca Trich Ep Trung',
        image: 'https://bizweb.dktcdn.net/100/021/951/products/foody-sushi-miya-849-635816657266398086.jpg?v=1502852608710'
    },
    {
        id: 'id_4',
        name: 'Tempura Tom',
        price: 90000,
        description: 'Tempura Tom',
        image: 'https://haithuycatering.com/image/5c300d9951046d646e172578/original.jpg'
    },
    {
        id: 'id_5',
        name: 'Sashimi Set 1',
        price: 225000,
        description: 'Sashimi Set 1',
        image: 'https://cdn.tgdd.vn/2020/10/CookProduct/Sushi-la-gi-co-tot-khong-nhung-loai-sushi-tot-va-khong-tot-cho-suc-khoe-1-1200x676.jpg'
    },
    {
        id: 'id_6',
        name: 'Sashimi Set 2',
        price: 335000,
        description: 'Sashimi Set 2',
        image: 'https://alosushi.vn/images/ckeditor/images/gia-do-an-alo-sushi1.jpg'
    }
]

class ShoppingProduct extends Component {

    constructor(props) {
        super(props);
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
