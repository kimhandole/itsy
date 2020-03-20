import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchShop } from '../../actions/shop_actions';
import { creatShoppingCartItem } from '../../actions/shopping_cart_action';



const mapStateToProps = (state, ownProps) => ({
    productId: ownProps.match.params.productId,
    product: state.entities.products[ownProps.match.params.productId],
    userId: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
    fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
    fetchShop: (shop_id) => dispatch(fetchShop(shop_id)),
    creatShoppingCartItem: (item) => dispatch(creatShoppingCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
