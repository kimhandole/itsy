import React from 'react';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.product, "phto");
        return (
            <section className="product-index-item">
                <img src={this.props.product.photoUrl} alt={this.props.product.title}>

                </img>
                <p className="product-index-item-title">{this.props.product.title}</p>
                <p className="product-index-item-price">${this.props.product.price}</p>
            </section>
        );
    }
}

export default ProductIndexItem;
