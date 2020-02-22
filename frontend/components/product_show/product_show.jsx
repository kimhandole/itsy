import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state({
            product: null,
            shop: null
        });
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId)
        .then(
            product => {
                this.props.fetchShop(product.product.product.shop_id)
            }
        );
    }

    render() {
        console.log(this.props);
        return (
            <section className="product-show">

            </section>
        );
    }
}

export default withRouter(ProductShow);
