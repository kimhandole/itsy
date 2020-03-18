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

        // this.props.fetchProduct(this.props.productId).then(product => {
        //     // this.setState({ product: product });
        //     this.props.fetchShop(product.product.product.shop_id)
        // });

        if (this.props.product === undefined) {
            this.props.fetchProduct(this.props.productId)
        }
    }

    price() {
        if (this.props.product !== undefined) {
            if (this.props.product.price.slice(-2)[0] === ".") {
                return `${this.props.product.price}0`
            } else {
                return this.props.product.price
            }
        }
    }

    render() {
        // if (!this.props.shop ) {
        //     return (
        //         <LoadingIcon />
        //     );
        // }
        return (
            <section className="product-show">
                <div className="product-show-left">
                    <img src={this.props.product.photoUrl} alt={this.props.product.title}>

                    </img>
                </div>
                <div className="product-show-right">
                    <h1 className="product-show-item-title">{this.props.product.title}</h1>
                    <p className="product-show-item-price">${this.price()}</p>
                    <p className="product-show-item-description">Description</p>
                    <p>{this.props.product.description}</p>
                </div>
            </section>
        );
    }
}

export default withRouter(ProductShow);
