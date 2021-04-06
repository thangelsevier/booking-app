import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/Menu.css';

const menus = [
    {
        name : 'Home',
        to : '/',
        exact : true,
        icon : 'home'
    },
    {
        name : 'Booking',
        to : '/booking',
        exact : true,
        icon : 'cart-plus'
    },
    {
        name : 'About us',
        to : '/about',
        exact : false,
        icon : 'info'
    },
    {
        name : 'Contact',
        to : '/contact',
        exact : false,
        icon : 'address-book'
    }
];

const userMenus = [
    {
        name : 'Log In',
        to : '/login',
        exact : false,
        icon : 'sign-in-alt'
    },
    {
        name : 'Sign Up',
        to : '/signup',
        exact : false,
        icon : 'user-plus'
    }
];

// Custom Link
const MenuLink = ({
    label,
    to,
    activeOnlyWhenExact,
    iconLabel
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { // meam match object in URL
                var active = match ? 'active' : '';

                return (
                    <Nav.Link active={active} href={to} className="my-link">
                        <FontAwesomeIcon icon={iconLabel}/> {label}
                    </Nav.Link>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <Container fluid className="bg-dark">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                { this.showMenus(menus) }
                                <NavDropdown title="Join us" id="basic-nav-dropdown">
                                    { this.showUserMenus(userMenus) }
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar>
                </Container>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact}
                        iconLabel={menu.icon}
                    />
                );
            });
        }

        return result;
    }

    showUserMenus = (userMenus) => {
        var result = null;

        if (userMenus.length > 0) {
            result = userMenus.map((menu, index) => {
                return (
                    <NavDropdown.Item href={menu.to} className="my-dropdown">
                        <FontAwesomeIcon icon={menu.icon}/> {menu.name} 
                    </NavDropdown.Item>
                );
            });
        }

        return result;
    }
}

export default Menu;
