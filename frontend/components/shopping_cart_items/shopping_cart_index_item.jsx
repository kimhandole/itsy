import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';


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
        if (!this.props.item) {
            return <LoadingIcon />
        }
        
        let item = this.props.item;

        return(
            <li className='cart-item'>
                <section className="cart-item-top">
                    <section className="cart-item-left">
                        <Link to={`/products/${item.product_id}`}>
                            <section className="cart-item-image-container">
                                <img src={item.photoUrls[0]} />
                            </section>
                        </Link>
                    </section>
                    <section className="cart-item-mid">
                        <Link to={`/products/${item.product_id}`}>
                            <p>{item.title}</p>
                        </Link>
                        <button onClick={() => this.props.deleteShoppingCartItem(this.props.item.id)}>Remove</button>
                    </section>
                    <section className="cart-item-right">
                        <input id="quantity" type="number" onChange={this.update('quantity')} min="1" max="100" value={this.state.quantity} />
                        <span>${this.totalPrice()}</span>
                    </section>
                </section>
                <section className="cart-item-down">
                    {/* <section className="gift-item" >
                        <input type="radio"/>
                        <section>
                            <span>This order is a gift</span>
                            <p>Prices will not be shown on packing slip</p>
                            <input type="textarea" placeholder="Enter your message—make sure to include to/from names" />
                        </section>
                    </section> */}
                </section>
            </li>
        );
    }
}

export default ShoppingCartIndexItem; 