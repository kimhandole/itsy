import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';
import Gallery from './gallery'

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: props.match.params.productId,
            quantity: 1
        } 

        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    addToCart() {
        const params = {
            'user_id': this.props.userId,
            'product_id': this.state.product_id,
            'quantity': this.state.quantity
        }
        this.props.creatShoppingCartItem(params).then(() => {
            this.props.history.push('/cart');
        });
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    price() {
        if (this.props.product.price.slice(-2)[0] === ".") {
            return `${this.props.product.price}0`
        } else {
            return this.props.product.price
        }
    }

    displayQuantity() {
        return (
            <section className="quantity">
                <p>
                    Quantity
                </p>
                <input type="number" onChange={this.update('quantity')} min="1" max="100" value={this.state.quantity} />
            </section>
        );
    }

    displayBuyItNow() {
        return (
            <section className="buy-it-now">
                <input type="button" value="Buy it now" onClick={() => this.props.openThankYou()}>
                    
                </input>
            </section>
        );
    }

    displayAddToCart() {
        return (
            <section className="add-to-cart">
                <input type="button" value="Add to cart" onClick={this.addToCart}>

                </input>
            </section>
        );
    }

    displayShippingInfo() {
        return (
             <section className="shipping">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" space="preserve" height="48" width="48" aria-hidden="true" focusable="false">  
                    <g id="lp-collage-shipping">
                        <g id="lp-collage-shipping--wheel-shadow-left__group" data-animator-group="true" data-animator-type="0">
                            <g id="lp-collage-shipping--wheel-shadow-left__group-inner">
                                <circle cx="13" cy="38" r="4" id="lp-collage-shipping--wheel-shadow-left"></circle>
                            </g>
                        </g>
                        <g id="lp-collage-shipping--wheel-shadow-right__group" data-animator-group="true" data-animator-type="0">
                            <g id="lp-collage-shipping--wheel-shadow-right__group-inner">
                                <circle cx="35" cy="38" r="4" id="lp-collage-shipping--wheel-shadow-right"></circle>
                            </g>
                        </g>
                        <g id="lp-collage-shipping--wheel-left__group" data-animator-group="true" data-animator-type="0">
                            <g id="lp-collage-shipping--wheel-left__group-inner">
                                <circle cx="13" cy="38" r="4" id="lp-collage-shipping--wheel-left"></circle>
                            </g>
                        </g>
                        <g id="lp-collage-shipping--wheel-right__group" data-animator-group="true" data-animator-type="0">
                            <g id="lp-collage-shipping--wheel-right__group-inner">
                                <circle cx="35" cy="38" r="4" id="lp-collage-shipping--wheel-right"></circle>
                            </g>
                        </g>
                        <g id="lp-collage-shipping--truck-body__group" data-animator-group="true" data-animator-type="0">
                            <g id="lp-collage-shipping--truck-body__group-inner" data-animator-group="true" data-animator-type="1">
                                <g id="lp-collage-shipping--truck-body__group-inner-inner">
                                    <path d="M38.6,15c-0.6-0.3-1.1-0.6-1.7-1H28v14H4v7c0.4,0.4,0.6,0.6,1,1h2.4c0.8-2.3,3-4,5.6-4s4.8,1.7,5.6,4h10.7c0.8-2.3,3-4,5.6-4s4.8,1.7,5.6,4H43c0.4-0.4,0.6-0.6,1-1V24L38.6,15z M32,24v-6h4.9l3.6,6H32z" id="lp-collage-shipping--truck-body-chassis"></path>
                                    <path d="M28,10c-0.8-0.8-1.2-1.2-2-2H6c-0.8,0.8-1.2,1.2-2,2v18h24V10z" id="lp-collage-shipping--truck-body-container"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <p>
                    <b>Hooray!</b> This item ships free to the US.
                </p>
             </section>
        );
    }

    displayHandmade() {
        return (
            <section className="handmade">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.1 62.5" width="24" height="36" aria-hidden="true" focusable="false"><path d="M19.6 47.6c-.6-.4-7.9-7.2-8.1-7.5-.2-.3-1.8-2.6-2.1-3.1-.4-.5-5.9-8.7-7-10.4-.7-1.1-1.9-2.8-1.9-3.3s.6-1.4.7-1.5c.1-.2 1.2-.7 1.7-.4.4.3 3.7 3.2 3.8 3.6s5 4.6 5.3 4.7c.4.1.6-1 .6-1s-.9-2.1-1-2.3c-.1-.2-6.1-12.4-6.2-12.8-.1-.4-1.9-3.5-1.9-4S4.6 8 5 7.9c.4-.1 2 0 2.2.1.2.2 7.9 11.9 8.8 13 .8 1.1 2.5 3.3 2.9 3.4.3.1.9-1.1.9-1.1s-3.2-11.8-3.3-12.2-2.8-6.6-2.9-7.2.2-2 .5-2.3 1.9-.6 2.7-.2c.8.8 4.3 8.5 4.8 9.6s4 8.5 4.5 9.1c.5.6 1.1.6 1.6.3.3-.1.3-9.4.3-9.4s-.1-2.4.2-3.5c.1-.6 1.4-1.4 2.1-1.5s1.9 1.5 2.1 1.8c.1.1.6 4.9 1.2 9.6.6 4.5 1.4 9 1.4 9.2 0 .3.5 1.1 1 1 .5-.2 3.6-2.4 4.1-2.6.6-.3 3.3-2.2 3.5-2.3.2-.1 1.4.1 1.4.1s.8.9 1.4 1.8c-.3.9-.6 1.5-1 2.2-1.7 3.2-3.8 6.6-5 8.8-1 1.9-1.9 3.6-1.9 3.7 0 .2 5.6 10.4 5.6 10.4L26.7 61.5s-.6-.7-1.3-2.1c-.7-1.3-1.5-3.2-2.3-4.9-1.9-3.7-3.2-6.7-3.5-6.9z" fillRule="evenodd" clipRule="evenodd" fill="#222"></path>
                </svg>
                <span>
                    Handmade
                </span>
            </section>
        );
    }

    render() {
        if (!this.props.product ) {
            return (
                <LoadingIcon />
            );
        }
        return (
            <section className="product-show">
                <div className="product-show-left">
                    {/* <img src={this.props.product.photoUrl} alt={this.props.product.title}>

                    </img> */}
                    <Gallery images={this.props.product.photoUrls} />
                </div>
                <div className="product-show-right">
                    <h1 className="product-show-item-title">{this.props.product.title}</h1>
                    <p className="product-show-item-price">${this.price()}</p>
                    {this.displayQuantity()}
                    {this.displayBuyItNow()}
                    {this.props.userId && this.displayAddToCart()}
                    {this.displayShippingInfo()}
                    {this.displayHandmade()}
                    <p className="product-show-item-description">Description</p>
                    <p>{this.props.product.description}</p>
                </div>
            </section>
        );
    }
}

export default withRouter(ProductShow);
