import React, { Component } from 'react';
import {theme} from '../../../assets/css/theme.js';
import SearchBox from './Searchbox.js';
import SearchResult from './SearchResult.js';
import styled from 'styled-components';

class Explore extends Component {

  constructor() {
    super();
  }
  render() {
    return (
    <div>
      <SearchBox />
      <SearchResult />
    </div>
    )
  }
}

export default Explore;