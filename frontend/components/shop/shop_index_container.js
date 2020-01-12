import { connect } from 'react-redux';

import ShopIndex from './shop_index';
import { fetchShops } from '../../actions/shop_actions';
import { selectShops } from '../../reducers/selectors';

const mapStateToProps = state => ({
    shop: selectShops(state)
});

const mapDispatchToProps = dispatch => ({
    fetchShops: () => dispatch(fetchShops())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopIndex);