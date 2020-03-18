import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';
import Footer from '../footer/footer';


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        
    }

    price() {
        if (this.props.product.price.slice(-2)[0] === ".") {
            return `${this.props.product.price}0`
        } else {
            return this.props.product.price
        }
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
                    <p className="product-show-item-description">Description</p>
                    <p>{this.props.product.description}</p>
                </div>
                <Footer isDark={true} />
            </section>
        );
    }
}

export default withRouter(ProductShow);
