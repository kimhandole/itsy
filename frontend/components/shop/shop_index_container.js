import { connect } from 'react-redux';

import ShopIndex from './shop_index';
import { fetchShops } from '../../actions/shop_actions';
import { selectShops } from '../../reducers/selectors';

const mapStateToProps = ( state ) => ({
    shops: selectShops(state),
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchShops: (owner_id) => dispatch(fetchShops(owner_id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopIndex);