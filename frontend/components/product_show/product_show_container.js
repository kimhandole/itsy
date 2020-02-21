import { connect } from 'react-redux';
import ProductShow from './product_show';


const mapStateToProps = (state, ownProps) => {
    // const product = state.entities.products[ownProps.match.params.productId];
    // const shop = state.entities.shops[ownProps.match.params.shopId];
    // const currentUserId = state.session.id;
    // return {
    //     product,
    //     shop,
    //     currentUserId
    // }
}


const mapDispatchToProps = dispatch => ({
    // fetchProduct: (id) => dispatch(fetchProduct(id)),
    // fetchShop: id => dispatch(fetchShop(id)),
    // addToCart: cartItem => dispatch(addToCart(cartItem)),
    // fetchCartItems: () => dispatch(fetchCartItems())
});

export default connect(null, null)(ProductShow);
