import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';

import ProductForm from './product_form';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    createProduct: productForm => dispatch(createProduct(productForm))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductForm);