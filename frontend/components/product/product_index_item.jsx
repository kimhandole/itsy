import React from 'react';
import LoadingIcon from '../loading/loading_icon';


class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    price() {
        if (this.props.product.price.slice(-2)[0] === ".") {
            return `${this.props.product.price}0`
        } else {
            return this.props.product.price
        }
    }

    render() {
        if (!this.props.product) {
            return <LoadingIcon />
        }

        return (
            <section className="product-index-item">
                <img src={this.props.product.photoUrl} alt={this.props.product.title}>

                </img>
                <p className="product-index-item-title">{this.props.product.title}</p>
                <p className="product-index-item-price">${this.price()}</p>
            </section>
        );
    }
}

export default ProductIndexItem;
