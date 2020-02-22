import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';



const mapStateToProps = (state, ownProps) => ({
    productId: ownProps.match.params.productId
});


const mapDispatchToProps = dispatch => ({
    fetchProduct: (product_id) => dispatch(fetchProduct(product_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
