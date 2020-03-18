import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';
import Footer from '../footer/footer';


class ProductSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    noResults() {
        if (Object.keys(this.props.entities.products).length === 0) {
            return (
                <p id="no-result">No results found</p>
            );
        }
    }

    render() {
        return (
            <section id="category-show">
                <p className="category-show-header">
                    <a href="#/" className="category-link">
                        Home
                    </a>
                    &nbsp;
                    >
                    &nbsp;
                    <span>
                        Search Results
                    </span>
                </p>
                {this.noResults()}
                <div className="product-search">
                    {
                        Object.values(this.props.entities.products).map((product, idx) => (
                            <ProductIndexItem product={product} key={`product-${idx}`} />
                        ))
                    }
                </div>
                <Footer isDark={true} />
            </section>
        );
    }
}

export default withRouter(ProductSearch);
