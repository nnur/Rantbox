import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './Searchbox.js';
import SearchResult from './SearchResult.js';

class Explore extends Component {
  render() {
    return (
    <div>
      <SearchBox />
      {this.props.rants.map((result, i) => (
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
