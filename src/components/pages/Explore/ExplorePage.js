import React, { Component } from 'react';
import { connect } from 'react-redux';
import {theme} from '../../../assets/css/theme.js';
import SearchBox from './Searchbox.js';
import SearchResult from './SearchResult.js';
import styled from 'styled-components';

class Explore extends Component {
  render() {
    console.log(this.props.rants)
    return (
    <div>
      <SearchBox />
      <SearchResult results={this.props.rants}/>
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
