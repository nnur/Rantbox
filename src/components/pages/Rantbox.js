import React, { Component } from 'react';
import {theme} from '../../assets/css/theme.js';
import { connect } from 'react-redux';
import { addRant } from '../../actions';
import styled from 'styled-components';

class Rantbox extends Component {

  constructor() {
    super();
    this.state = {
      rantBody: '',
      rantAbout: ''
    }
  }

  onRantAboutEdited (event) {
    this.setState({rantAbout: event.target.value});
  }

  onRantBodyEdited (event) {
    this.setState({rantBody: event.target.value});
  }

  onSubmit() {
    const rantAbout = this.state.rantAbout;
    const rantBody = this.state.rantBody;
    if (rantAbout && rantBody && (rantAbout.length > 0) && (rantBody.length > 0)) {
      this.props.addRant(this.state.rantBody, this.state.rantAbout)
      this.setState({rantAbout: ''});
      this.setState({rantBody: ''});
    }
  }

  render() {
      return (
        <div>
            <RantboxWrapper>
              <RantboxTitle>
                  * I think
              </RantboxTitle>

              <RantboxThink 
                value={this.state.rantBody}
                onChange={this.onRantBodyEdited.bind(this)}
                placeholder='Type your rant...'
                maxLength={140}
              />

              <RantboxTitle>
                  * about
              </RantboxTitle>

              <RantboxAbout
                value={this.state.rantAbout}
                onChange={this.onRantAboutEdited.bind(this)}
                placeholder='What is your rant about?'
                maxLength={50}/>

              <SubmitButton onClick={this.onSubmit.bind(this)} disabled={this.state.rantAbout.length === 0 || this.state.rantBody.length === 0}>
                Submit Rant!
              </SubmitButton>
            </RantboxWrapper>
        </div>
      );
  }
}

const mapDispatchToProps = {
  addRant
}
export default connect (
  () => ({}),
  mapDispatchToProps
)(Rantbox)

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
    cursor: pointer;
    outline: none; 
    &:hover {
        background: ${theme.paleGreen};
    }
    &:active {
        background: ${theme.mediumGreen};
    }
    &:disabled {
      background: #F4F8FA;
      border: solid 2px #526069;
      cursor: auto;
    }
`

