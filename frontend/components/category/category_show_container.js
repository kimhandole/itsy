import { connect } from "react-redux";
import { fetchCategory } from "../../actions/category_actions";
import CategoryShow from "./category_show";
import { fetchShops } from "../../actions/shop_actions";
import { selectCategoryProducts } from "../../reducers/selectors";
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
    // category: state.entities.categories[ownProps.match.params.categoryId],
    // shops: state.entities.shops,
    // products: selectCategoryProducts(state.entities.products, ownProps.match.params.categoryId)
    categoryId: ownProps.match.params.categoryId
});

const mapDispatchToProps = dispatch => ({
    fetchCategory: id => dispatch(fetchCategory(id)),
    fetchShops: () => dispatch(fetchShops()),
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, null)(CategoryShow);