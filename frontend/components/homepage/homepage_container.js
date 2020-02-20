import { connect } from 'react-redux';
import HomePage from './homepage';
import { fetchAllProducts } from '../../actions/product_actions';

const mapDispatchToProps = dispatch => ({
    fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(null, mapDispatchToProps)(HomePage);