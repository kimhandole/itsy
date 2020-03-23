import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.item.id,
            quantity: this.props.item.quantity,
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
        let item = this.props.item;

        return(
            <li className='cart-item'>
                <section className="cart-item-top">
                    <section className="cart-item-left">
                        {/* <Link to={`/products/${item.product_id}`}> */}
                            <section className="cart-item-image-container">
                                <img src={item.photoUrl} />
                            </section>
                        {/* </Link> */}
                    </section>
                    <section className="cart-item-mid">
                        <p>{item.title}</p>
                        <button onClick={() => this.props.deleteShoppingCartItem(this.props.item.id)}>Remove</button>
                    </section>
                    <section className="cart-item-right">
                        <input id="quantity" type="number" onChange={this.update('quantity')} min="1" max="100" value={this.state.quantity} />
                        <span>${this.totalPrice()}</span>
                    </section>
                </section>
                <section className="cart-item-down">

                </section>
            </li>
        );
    }
}

export default ShoppingCartIndexItem; 