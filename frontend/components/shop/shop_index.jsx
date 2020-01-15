import React, { Component } from 'react';

class ShopIndex extends Component {
    constructor(props) {
        super(props);

    }

    handleAddShop() {
        this.props.history.push('/shops/new');
    }

    shop(title, id) {
        return (
            <div className="shop" key={id}>
                <div className="shop-top">
                </div>
                <div className="shop-bottom">
                    <div className="shop-title">
                        {title}
                    </div>
                    <div className="shop-buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    shopsPageBanner() {
        return (
            <div className="shops-banner">
                <h1 className="shops-banner-title">
                    Create your shop
                </h1>
                <p className="shops-banner-description">
                    Add as many listings as you can. Ten or more would be a great start. More listings means more chances to be discovered!
                </p>
            </div>
        );
    }

    shopsPageMain() {
        const { shops } = this.props;

        return (
            <div className="shops-main">
                <div className="shop" id="shop-add" onClick={() => this.handleAddShop()}>
                    <div className="shop-top">
                        <p className="shop-add">+</p>
                        <p className="shop-add-text">Add a shop</p>
                    </div>
                    <div className="shop-bottom">

                    </div>
                </div>
                {shops.map((shop) => this.shop(shop.title, shop.id))}
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchShops(this.props.currentUser);
    }

    render() {
        const { shops } = this.props;

        return (
            <section className="shops">
                <div className="shops-banner-container">
                    {this.shopsPageBanner()}
                </div>
                <div className="shops-main-container">
                    {this.shopsPageMain()}
                </div>
            </section>
        );
    }
}

export default ShopIndex;