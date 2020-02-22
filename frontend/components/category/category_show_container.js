import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { fetchProductsByCategory } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => ({
    // category: state.entities.categories[ownProps.match.params.categoryId],
    // shops: state.entities.shops,
    // products: selectCategoryProducts(state.entities.products, ownProps.match.params.categoryId),
    categoryId: ownProps.match.params.categoryId
});

const mapDispatchToProps = dispatch => ({
    fetchProductsByCategory: category_id => dispatch(fetchProductsByCategory(category_id))
    // fetchShops: () => dispatch(fetchShops()),
    // fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);