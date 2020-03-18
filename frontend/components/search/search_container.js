import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { fetchSearchProducts} from '../../actions/product_actions';

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchProducts: (query) => dispatch(fetchSearchProducts(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);