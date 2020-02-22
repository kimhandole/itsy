import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId);
    }

    render() {
        return (
            <section>

            </section>
        );
    }
}

export default withRouter(ProductShow);
