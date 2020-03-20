import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.item.id,
            quantity: this.props.item.quantity,
            // price: this.props.item.price || 0
        }
    }


    totalPrice(){
        let total = (parseFloat(this.state.quantity) * parseFloat(this.props.item.price)).toFixed(2);
        return total; 
    }


    update(field){
        return(e) => {
            this.setState({[field]: e.target.value}, () => {
                this.props.updateShoppingCartItem(this.state);
            });
        }
    }

    render() {
        console.log(this.props.item);
        return(
            <li className='cart-item'>
            </li>
        );
    }
}

export default ShoppingCartIndexItem; 