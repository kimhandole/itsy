import React, { Component } from 'react';
import ShopIndexItem from './shop_index_item';

class ShopIndex extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        if (this.props.shops.length === 0) {
            this.props.fetchShops(this.props.currentUser);
        }
        
    }

    handleAddShop() {
        this.props.history.push('/shops/new');
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
        const { shops, deleteShop } = this.props;

        return (
            <div className="shops-main">
                <div className="shop" id="shop-add" onClick={() => this.handleAddShop()}>
                    <div className="shop-top" id="shop-add-top">
                        <p className="shop-add">+</p>
                        <p className="shop-add-text">Add a shop</p>
                    </div>
                    <div className="shop-bottom">

                    </div>
                </div>
                {shops.map((shop, id) => <ShopIndexItem shop={shop} key={id} deleteShop={deleteShop}/>)}
            </div>
        );
    }

    render() {

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