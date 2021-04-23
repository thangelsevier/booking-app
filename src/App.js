import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import routes from './helpers/routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import CartContextProvider from './contexts/CartContextProvider';

library.add(fas)

class App extends Component {
  render() {
    return (
        <CartContextProvider>
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu />
                    {/* Content display of Menu selected */}
                    <Switch>
                        { this.showContentMenu(routes) }
                    </Switch>
                </div>
            </Router>
        </CartContextProvider>
    );
  }

  showContentMenu = (routes) => {
    var result = null;

    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route 
                    key={index} 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.main} 
                />
            );
        });
    }

    return result;
  }
}

export default App;
