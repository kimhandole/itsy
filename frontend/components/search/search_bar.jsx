import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


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
        this.props.history.push("/products/search");
      })
  }


  render() {
    return (
        <form className='searchbar' onSubmit={this.handleSubmit}>
            <input type='text'
                className="searchinput"
                onChange={this.update("query")}
                value={this.state.query}
                placeholder='Search for items or shops' />
                <button type="submit" className="searchbutton">
                    <FontAwesomeIcon icon={faSearch} size="2x" />
                </button>
        </form>
    )
  }
}

export default withRouter(SearchBar);