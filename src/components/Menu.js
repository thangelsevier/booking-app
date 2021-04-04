import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

import '../css/Menu.css';

const menus = [
    {
        name : 'Home',
        to : '/',
        exact : true
    },
    {
        name : 'About us',
        to : '/about',
        exact : false
    },
    {
        name : 'Contact',
        to : '/contact',
        exact : false
    }
];

const userMenus = [
    {
        name : 'Log In',
        to : '/login',
        exact : false
    },
    {
        name : 'Sign Up',
        to : '/signup',
        exact : false
    }
];

// Custom Link
const MenuLink = ({
    label,
    to,
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { // meam match object in URL
                var active = match ? 'active' : '';

                return (
                    <Nav.Link active={active} href={to} className="my-link">{label}
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
                                <NavDropdown title="Join Us" id="basic-nav-dropdown">
                                    { this.showUserMenus(userMenus) }
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
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
                    <NavDropdown.Item href={menu.to} className="my-dropdown">{menu.name} 
                    </NavDropdown.Item>
                );
            });
        }

        return result;
    }
}

export default Menu;
