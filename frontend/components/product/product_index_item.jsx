import React from 'react';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="product-index-item">
                <div>

                </div>
                <p>{this.props.product.title}</p>
                <p>${this.props.product.price}</p>
            </section>
        );
    }
}

export default ProductIndexItem;
