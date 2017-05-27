import React, { Component } from 'react';
import {theme} from '../../../assets/css/theme.js';
import styled from 'styled-components';

class SearchResult extends Component {

  constructor() {
    super();
  }
  render() {
    return (
    <div>
      <SearchResultWrapper>
          <RantResult>
              Sometimes I really hate the way flux just dims my screen without asking but then i get used to it and its like i'm waring sunglasses. i wish that my mom loved me...'
             <RantDate>
                date
             </RantDate>
          </RantResult>
      </SearchResultWrapper>
    </div>
    )
  }
}

export default SearchResult;

const SearchResultWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`

const RantResult = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 50px;
    border: solid 2px black;
    width: 700px;
    padding: 10px;
`
const RantDate = styled.div`
`