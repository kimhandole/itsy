import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    console.log(state, "state");
    console.log(ownProps, "ownProps");
    console.log(getState(), "getstate");

    return ({
        currentUser: state.session.currentUser
    });
}

const mapDispatchToProps = dispatch => ({
    createProduct: productForm => dispatch(createProduct(productForm))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductForm);