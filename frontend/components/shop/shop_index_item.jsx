import React from 'react';
import { withRouter } from 'react-router-dom';

class ShopIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleShowShop = this.handleShowShop.bind(this);
        this.handleDeleteShop = this.handleDeleteShop.bind(this);
        this.handleEditShop = this.handleEditShop.bind(this);
    }


    handleShowShop() {
        this.props.history.push(`/shops/${this.props.shop.id}`);
    }

    handleEditShop(e) {
        e.stopPropagation();
        const { shop } = this.props;
        this.props.history.push(`/shops/${shop.id}/edit`);
    }

    handleDeleteShop(e) {
        const { shop, deleteShop } = this.props;
        e.stopPropagation();
        deleteShop(shop.id);
    }

    render() {
        const { shop } = this.props;

        return (
            <div className="shop" key={shop.id} onClick={this.handleShowShop}>
                <div className="shop-top">
                </div>
                <div className="shop-bottom">
                    <div className="shop-title">
                        {shop.title}
                    </div>
                    <div className="shop-buttons">
                        <button onClick={this.handleEditShop}>Edit</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <button onClick={this.handleDeleteShop}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ShopIndexItem);