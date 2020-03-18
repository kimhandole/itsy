import { connect } from 'react-redux';
import ProductSearch from './product_search';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        entities: state.entities
    });
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductSearch);