import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import { openModal } from '../../actions/modal_actions';
import { fetchAllShoppingCartItems, deleteShoppingCartItem, updateShoppingCartItem } from '../../actions/shopping_cart_action';

const mapStateToProps = (state) => {
    let items = Object.keys(state.entities.shoppingCartItems).map(id=> state.entities.shoppingCartItems[id]);
    
    return {
        user_id: state.session.currentUser,
        items: items 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllShoppingCartItems: (user_id) => dispatch(fetchAllShoppingCartItems(user_id)),
        deleteShoppingCartItem: (id) => dispatch(deleteShoppingCartItem(id)),
        updateShoppingCartItem: (shoppingCartItem) => dispatch(updateShoppingCartItem(shoppingCartItem)),
        openThankYou: () => dispatch(openModal('thankyou'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIndex);