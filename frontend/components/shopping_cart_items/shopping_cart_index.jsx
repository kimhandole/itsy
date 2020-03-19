import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ShoppingCartIndexItem from './shopping_cart_index_item';

class ShoppingCartIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllShoppingCartItems(this.props.user_id);
    }

    componentWillUnmount() {

    }
    
    totalQuantity(){
        return this.props.items.length; 
    }

    totalAmount(){
        let sum = 0;
        for(let i = 0; i < this.props.items.length; i++){
            let item = this.props.items[i];
            sum += (parseFloat(item.quantity) * parseFloat(item.price))
        }
        return sum.toFixed(2)
    }

    displayEmptyCart() {
        return(
            <section className="empty-cart-container">
                <section className="empty-cart-box">
                    <p>
                        Your cart is empty.
                    </p>
                    <Link to="/" className="discover-link">
                        Discover something unique to fill it up
                    </Link>
                </section>
                <section className="empty-cart-text">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 65 65" version="1.1" aria-hidden="true" focusable="false">
                        <defs>
                            <polygon id="path-1" points="0 0 65 0 65 69 0 69"></polygon>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="IMPACT_ABOUT-PG_R4" transform="translate(-664.000000, -1098.000000)">
                                <g id="carbon-neutral" transform="translate(121.000000, 275.000000)">
                                    <g id="Group-3" transform="translate(543.000000, 823.000000)">
                                        <mask id="mask-2" fill="white">
                                            <use href="#path-1"></use>
                                        </mask>
                                        <g id="Clip-2"></g>
                                        <path d="M64.2380801,0.753616945 C64.2380801,0.753616945 30.9256241,-3.9547134 16.6539847,10.16584 C7.75271703,18.9656695 6.4740571,32.3628885 12.6385439,42.5871987 L45.2062366,19.5780631 L0,64.2916697 L9.51592177,69 L21.943599,51.7908529 C32.280555,57.8881629 45.8253772,56.623437 54.7221583,47.8191699 C68.9982843,33.7030541 64.2380801,0.753616945 64.2380801,0.753616945" id="Fill-1" fill="black" mask="url(#mask-2)"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg >
                    <span>
                        Itsy offsets carbon emissions from every delivery
                    </span>
                </section>
            </section>
        );
    }

    displayCart() {

    }

    oldReturn() {
        <div className='cart-index'>
            <h1>{this.totalQuantity()} items in your cart</h1>
            <div className='cart-container'>
                <div className='left-col right-border'>
                    <ul>
                        {this.props.items.map((item) => (
                            <ShoppingCartIndexItem deleteProduct={this.props.deleteShoppingCartItem} updateShoppingCartItem={this.props.updateShoppingCartItem} item={item} key={item.id} />
                        )
                        )}
                    </ul>

                </div>
                <div className='right-col'>
                    <div>
                        <h2>How you'll pay</h2>
                        <label className='credit-card'>
                            <input type='radio' name='payment' value='visa' defaultChecked />
                            <div className='credit-card-img'>
                                <img src="https://image.flaticon.com/icons/svg/196/196578.svg" />
                                <img src='https://image.flaticon.com/icons/svg/196/196561.svg' />
                                <img src='https://image.flaticon.com/icons/svg/349/349228.svg' />
                                <img src='https://image.flaticon.com/icons/svg/217/217426.svg' />
                            </div>
                        </label>

                        <label className='credit-card'>
                            <input type='radio' name='payment' value='paypal' />
                            <div className='paypal-icon'>
                                <img src="https://image.flaticon.com/icons/svg/888/888870.svg" />
                            </div>
                        </label>
                    </div>

                    <div className='item-total'>
                        <span>Item(s) total</span><span>${this.totalAmount()}</span>
                    </div>
                    <div className='shipping'>
                        <span>Shipping</span><span>Free</span>
                    </div>

                    <div className='subtotal'>
                        <span>Subtotal</span><span>${this.totalAmount()}</span>

                    </div>


                    <button>Proceed to checkout</button>
                </div>
            </div>

        </div>
    }


    render(){
        if (this.totalQuantity() === 0) {
            return (this.displayEmptyCart());
        } else {
            return (this.displayCart());
        }
    }

}

export default withRouter(ShoppingCartIndex); 