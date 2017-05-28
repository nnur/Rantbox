import React, { Component } from 'react';
import {theme} from '../../assets/css/theme.js';
import styled from 'styled-components';

class Rantbox extends Component {

  render() {

    console.log(this.props)
    console.log('this.props')
      return (
        <div>
            <RantboxWrapper>
              <RantboxTitle>
                  I think
              </RantboxTitle>

              <RantboxThink>
              </RantboxThink>

              <RantboxTitle>
                  about
              </RantboxTitle>

              <RantboxAbout>
              </RantboxAbout>

              <SubmitButton>
                Submit Rant!
              </SubmitButton>
            </RantboxWrapper>
        </div>
      );
  }
}

const RantboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 400px;
`

const RantboxTitle = styled.div`
  align-self: left;
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 20px;
`

const RantboxThink = styled.textarea`
  padding: 15px;
  outline: none;
  font-size: 14px;
  border: solid 2px black;
  height: 100px;
  margin-bottom: 20px;
  &:focus {
    background: ${theme.palePink};
  }
`

const RantboxAbout = styled.textarea`
  padding: 15px;
  outline: none;
  font-size: 14px;
  border: solid 2px black;
  margin-bottom: 40px;
  &:focus {
    background: ${theme.palePink};
  }
`

const SubmitButton = styled.button`
    align-self: flex-end;
    font-size: 16px;
    border: solid 2px black;
    padding: 10px 20px 10px 20px;
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

export default Rantbox;