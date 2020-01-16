import { connect } from 'react-redux';
import { updateShop } from '../../actions/shop_actions';

import ShopEditForm from './shop_edit_form';

const mapStateToProps = ( state, ownProps ) => {
    return ({
    currentUser: state.session.currentUser,
    state,
    shop: state.entities.shops[ownProps.match.params.shopId]
});}

const mapDispatchToProps = dispatch => ({
    updateShop: shopForm => dispatch(updateShop(shopForm))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopEditForm);