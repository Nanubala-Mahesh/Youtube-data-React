import React, { Component } from 'react'
// import ReactDOM from 'reat-dom'

// const SearchBar = () => {
//   return <input />
// };

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''}
  }

  render() {
    return (
      <div>
        <input value= {this.state.term}
        onChange={event => this.OnInputChange(event.target.value)} />
      </div>
    );
  }

  OnInputChange(term) {
    // console.log(event.target.value);
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
// ReactDOM.render(SearchBar)
