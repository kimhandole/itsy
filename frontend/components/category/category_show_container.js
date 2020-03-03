import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { fetchProductsByCategory } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => ({
    categoryId: ownProps.match.params.categoryId,
    state
});

const mapDispatchToProps = dispatch => ({
    fetchProductsByCategory: category_id => dispatch(fetchProductsByCategory(category_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);