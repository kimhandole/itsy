import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            shop: null
        }
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId)
        .then( product => {
            this.setState({ product: product });
            this.props.fetchShop(product.product.product.shop_id)
            .then( shop => {
                this.setState({ shop: shop });
            });
        });
    }

    render() {
        if (this.state.product === null || this.state.shop === null) {
            return (
                <LoadingIcon />
            );
        }
        return (
            <section className="product-show">

            </section>
        );
    }
}

export default withRouter(ProductShow);
