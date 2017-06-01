import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './Searchbox.js';
import SearchResult from './SearchResult.js';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rants: props.rants
    }
  }

  queryResults(query) {
    query = query.toLowerCase();
    const rants = this.props.rants.filter((rant) => {
      return (rant.about.toLowerCase().includes(query) || rant.body.toLowerCase().includes(query))
    });
    this.setState({rants});
  }

  render() {
    return (
    <div>
      <SearchBox onQueryChange={this.queryResults.bind(this)}/>

      {this.state.rants.map((result, i) => (
        <SearchResult result={result} key={i}/>
      ))}
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  rants: state.rants
});

export default connect(
  mapStateToProps
)(Explore)
