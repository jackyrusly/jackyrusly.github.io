import React, { Component, Fragment } from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Social from './components/Social';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Home />
                <Portfolio />
                <Social />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
