import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './shared/Nav';
import Rantbox from './pages/Rantbox';
import Explore from './pages/Explore/ExplorePage';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route path="/rant" component={ Rantbox } />
      <Route path="/explore" component={ Explore } />
    </div>
  </Router>
)

export default App;

