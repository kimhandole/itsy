import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shop_actions';
import { selectShop } from '../../reducers/selectors';
import ShopShow from './shop_show';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        entities: state.entities,
        shop: selectShop(state.entities.shops, ownProps.match.params.shopId),
        shopId: ownProps.match.params.shopId
    });
}

const mapDispatchToProps = dispatch => ({
    fetchShop: id => dispatch(fetchShop(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopShow);