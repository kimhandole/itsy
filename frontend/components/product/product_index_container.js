import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts, fetchAllProducts } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        entities: state.entities,
        shopId: ownProps.shopId,
        fetchAll: ownProps.fetchAll
    });
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: (shop_id) => dispatch(fetchProducts(shop_id)),
    fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductIndex);