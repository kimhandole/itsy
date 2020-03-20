import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: props.product.id,
            quantity: 1
        } 
    }

    componentDidMount() {
        
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
                <input type="button" value="Buy it now">
                    
                </input>
            </section>
        );
    }

    displayAddToCart() {
        return (
            <section className="add-to-cart">
                <input type="button" value="Add to cart">

                </input>
            </section>
        );
    }

    displayShippingInfo() {

    }

    displayHandmade() {

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
                    <img src={this.props.product.photoUrl} alt={this.props.product.title}>

                    </img>
                </div>
                <div className="product-show-right">
                    <h1 className="product-show-item-title">{this.props.product.title}</h1>
                    <p className="product-show-item-price">${this.price()}</p>
                    {this.displayQuantity()}
                    {this.displayBuyItNow()}
                    {this.displayAddToCart()}
                    <p className="product-show-item-description">Description</p>
                    <p>{this.props.product.description}</p>
                </div>
            </section>
        );
    }
}

export default withRouter(ProductShow);
