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

    renderImage() {
        if (this.props.product.photoUrls) {
            return (
                <img src={this.props.product.photoUrls[0]} alt={this.props.product.title}>

                </img>
            );
        }
    }

    render() {
        if (!this.props.product) {
            return <LoadingIcon />
        }

        
        return (
            <Link to={`/products/${this.props.product.id}`}>
                <section className="product-index-item">
                    {this.renderImage()}
                    <p className="product-index-item-title">{this.props.product.title}</p>
                    <p className="product-index-item-price">${this.price()}</p>
                </section>
            </Link>
        );
    }
}

export default ProductIndexItem;
