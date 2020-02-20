import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        shopId: ownProps.match.params.shopId
    });
}

const mapDispatchToProps = dispatch => ({
    createProduct: productForm => dispatch(createProduct(productForm))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductForm);