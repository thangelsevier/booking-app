import { Component } from "react";
import CartContext from "./CartContext";

class CartContextProvider extends Component {

    constructor(props) {
        super(props);
        localStorage.clear();
    }

    state = {
        storage : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {},
        totalItemCount : 0,
        addToCart: (item) => {
            var currentCart = this.state.storage;
            var existItem = currentCart[item.id]
            var counted = 0
            if (existItem) {
                counted = existItem.quantity;
                counted+=1;
                existItem.quantity = counted;
                currentCart[item.id] = existItem;
            } else {
                var newItem = {id: item.id, name: item.name, quantity: 1, price: item.price}
                currentCart[item.id] = newItem;
            }
        
            // set total item
            this.setState({ totalItemCount: this.state.totalItemCount + 1 });
        
            // set storage and state
            this.setState({ storage: currentCart });
            localStorage.setItem('cart', JSON.stringify(currentCart));
            console.log(currentCart);
        }
    };
    
    render() {
        return ( 
            <CartContext.Provider value={this.state} >
                {this.props.children}
            </CartContext.Provider>
        );
    };
}

export default CartContextProvider;
