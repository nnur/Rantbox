import React, { Component } from 'react';
import { theme } from '../../../assets/css/theme.js';
import styled from 'styled-components';

class SearchResult extends Component {

  render() {
    return (
    <div>
      <SearchResultWrapper>
        <RantResult>
            { this.props.result.body }
            <RantDate>
            May 13, 2017
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
    border: solid 2px black;
    width: 700px;
    height: 70px;
    overflow: hidden;
    padding: 10px;
    margin-top: -2px;
`
const RantDate = styled.div`
    align-self: flex-end;
    font-size: 12px;
    font-weight: 300;
`