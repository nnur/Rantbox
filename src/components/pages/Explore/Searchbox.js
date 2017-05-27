import React, { Component } from 'react';
import {theme} from '../../../assets/css/theme.js';
import styled from 'styled-components';

class Searchbox extends Component {

  constructor() {
    super();
  }
  render() {
    return (
    <div>
        <SearchboxWrapper>

            <SearchboxTitle> Show me rants about... </SearchboxTitle>

            <div>

              <SearchboxInput></SearchboxInput>
              <SearchButton>Search</SearchButton>
            </div>
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
  width: 500px;
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
  width: 60%;
  &:focus {
    background: ${theme.palePink};
  }
`

const SearchButton = styled.button`
    font-size: 16px;
    font-color: black;
    border: solid 2px black;
    padding: 8px 20px 8px 20px;
    background: white;
    font-weight: 500;
    outline: none; 
    &:hover {
        background: ${theme.paleGreen};
    }
    &:active {
        background: ${theme.mediumGreen};
    }
`