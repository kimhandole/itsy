import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        entities: state.entities,
        shopId: ownProps.shopId
    });
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: (shop_id) => dispatch(fetchProducts(shop_id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductIndex);