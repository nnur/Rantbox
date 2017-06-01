import React, { Component } from 'react';
import {theme} from '../../../assets/css/theme.js';
import styled from 'styled-components';

class Searchbox extends Component {

  constructor() {
    super();
    this.state = {
      searchQuery: ''
    }
  }

  onSearchQueryChange(event) {
    this.setState({searchQuery: event.target.value});
    this.props.onQueryChange(event.target.value);
  }

  render() {
    return (
    <div>
        <SearchboxWrapper>
            <SearchboxTitle> Show me rants about... </SearchboxTitle>
              <SearchboxInput
                value={this.state.searchQuery}
                onChange={this.onSearchQueryChange.bind(this)}
                placeholder='Type...'
              />
        </SearchboxWrapper>
    </div>
    )
  }
}

export default Searchbox;

const SearchboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: 40px;
  width: 400px;
`

const SearchboxTitle = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 20px;
`

const SearchboxInput = styled.input`
  padding: 10px;
  outline: none;
  font-size: 14px;
  border: solid 2px black;
  margin-bottom: 20px;
  margin-right: 20px;
  &:focus {
    background: ${theme.palePink};
  }
`