import React, { Component } from 'react';
import { theme } from '../../../assets/css/theme.js';
import styled from 'styled-components';

class SearchResult extends Component {

  render() {
      console.log(this.props)
    return (
    <div>
      <SearchResultWrapper>
        {this.props.results.map((result, i) => (
            (<RantResult key={i}>
                { result.text }
                <RantDate>
                May 13, 2017
                </RantDate>
            </RantResult>)
        ))}

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
    align-self: flex-end;
    font-size: 12px;
    font-weight: 300;
`