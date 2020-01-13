import React, { Component } from 'react';

class ShopIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchShops()
    }

    render() {
        const { shops } = this.props;
        console.log(shops);

        return (
            <section className="shopdex">
                {shops}
            </section>
        );
    }
}

export default ShopIndex;