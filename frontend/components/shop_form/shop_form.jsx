import React from 'react';

class ShopForm extends React.Component {
    constructor(props) {
        super(props);
    }

    shopFormBanner() {
        return (
            <div className="shops-banner">
                <h1 className="shops-banner-title">
                    Name your shop
                </h1>
                <p className="shops-banner-description">
                    Choose a memorable name that reflexts your style.
                </p>
            </div>
        );
    }

    render() {
        return (
            <section className="shop-form">
                <div className="shops-banner-container">
                    {this.shopFormBanner()}
                </div>
                <div className="shop-form-title-container">
                    <div className="shop-form-title-inner-container">
                        <input className="shop-form-title-input" type="text" placeholder="Enter your shop name" />
                        <p>Your shop name will appear in your shop and next to each of your listings throughout Itsy. After you open your shop, you can change your name once.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopForm;