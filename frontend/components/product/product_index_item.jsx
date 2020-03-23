import React from 'react';
import { Link } from 'react-router-dom';
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
        console.log(this.props.product);
        
        return (
            <Link to={`/products/${this.props.product.id}`}>
                <section className="product-index-item">
                    <img src={this.props.product.photoUrls[0]} alt={this.props.product.title}>

                    </img>
                    <p className="product-index-item-title">{this.props.product.title}</p>
                    <p className="product-index-item-price">${this.price()}</p>
                </section>
            </Link>
        );
    }
}

export default ProductIndexItem;
