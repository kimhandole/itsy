import { connect } from 'react-redux';
import { createShop } from '../../actions/shop_actions';

import ShopForm from './shop_form';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    createShop: shopForm => dispatch(createShop(shopForm))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopForm);