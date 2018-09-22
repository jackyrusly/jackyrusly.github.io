import React, { Component, Fragment } from 'react';
import Snow from './components/Snow';
import Home from './components/Home';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Biography from './components/Biography';
import Social from './components/Social';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Snow />
        <Home />
        <Skill />
        <Portfolio />
        <Biography />
        <Social />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
