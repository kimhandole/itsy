import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.fetchAll) {
            this.props.fetchAllProducts();
        } else {
            this.props.fetchProducts(this.props.shopId);
        }
    }

    render() {
        return (
            <section className="product-index">
                {
                    Object.values(this.props.entities.products).map( (product, idx) => (
                        <ProductIndexItem product={product} key={`product-${idx}`}/>
                    ))
                }
            </section>
        );
    }
}

export default withRouter(ProductIndex);
