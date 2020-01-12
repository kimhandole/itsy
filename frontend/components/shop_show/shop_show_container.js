import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shop_actions';
import ShopShow from './shop_show';

const mapStateToProps = (state, { match }) => {
    const shopId = parseInt(match.params.shopId);
    return {
        shopId
    }
};

const mapDispatchToProps = dispatch => ({
    fetchShop: id => dispatch(fetchShop(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopShow);