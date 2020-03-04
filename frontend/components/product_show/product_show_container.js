import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchShop } from '../../actions/shop_actions';



const mapStateToProps = (state, ownProps) => ({
    productId: ownProps.match.params.productId,
    product: state.entities.products[ownProps.match.params.productId]
});


const mapDispatchToProps = dispatch => ({
    fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
    fetchShop: (shop_id) => dispatch(fetchShop(shop_id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
