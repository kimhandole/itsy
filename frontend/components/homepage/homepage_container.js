import { connect } from 'react-redux';
import HomePage from './homepage';
import { fetchAllProducts } from '../../actions/product_actions';
import { fetchCategories } from '../../actions/category_actions';


const mapDispatchToProps = dispatch => ({
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(null, mapDispatchToProps)(HomePage);