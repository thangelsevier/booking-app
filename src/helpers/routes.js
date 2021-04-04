import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    },
    {
        path : '/signup',
        exact : false,
        main : ({location}) => <SignUp location={location} />
    }
];

export default routes;