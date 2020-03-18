import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ""
    }

    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.fetchSearchProducts(this.state.query).then(() => {
      this.props.history.push("/search")
    })
  }


  render() {
    return (
        <form className='searchbar' onSubmit={this.handleSubmit}>
          <input type='text'
            id='search-text'
            onChange={this.update("query")}
            value={this.state.query}
            placeholder='Search for items or shops' />
          <button type="submit" className="searchbutton"><i className="fa fa-search"></i></button>
        </form>
    )
  }
}

export default withRouter(SearchBar);