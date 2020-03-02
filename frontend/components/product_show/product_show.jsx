import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     product: null,
        //     shop: null
        // }
    }

    componentDidMount() {
        // this.props.fetchProduct(this.props.productId)
        // .then( product => {
        //     this.setState({ product: product });
        //     this.props.fetchShop(product.product.product.shop_id)
        //     .then( shop => {
        //         this.setState({ shop: shop });
        //     });
        // });

        this.props.fetchProduct(this.props.productId).then(product => {
            // this.setState({ product: product });
            this.props.fetchShop(product.product.product.shop_id)
        });

    }

    render() {
        if ( !this.props.product || !this.props.shop ) {
            return (
                <LoadingIcon />
            );
        }
        return (
            <section className="product-show">
                <img src={this.props.product.photoUrl} alt={this.props.product.title}>

                </img>
                <p className="product-index-item-title">{this.props.product.title}</p>
            </section>
        );
    }
}

export default withRouter(ProductShow);
