import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {theme} from '../../assets/css/theme.js';
import styled from 'styled-components';

class Nav extends Component {

  render() {
    return (
      <NavWrapper>
          <Logo>
              <Link to="/rant">Rantbox</Link>
          </Logo>
          <ExploreButton>
              <Link to="/explore">Explore</Link>
          </ExploreButton>
      </NavWrapper>
    );

  }
}

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px;
`
const Logo = styled.div`
    font-size: 28px;
    font-weight: 700;
`
const ExploreButton = styled.div`
    font-size: 16px;
    font-color: black;
    border: solid 2px black;
    padding: 5px 15px 5px 15px;
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

export default Nav;