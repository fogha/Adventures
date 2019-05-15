import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/header-footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/venueInfo/index.js';
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/location/index';
import Footer from './components/header-footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"cornflowerBlue"}}>
        <Header />

        <Element name="featured">
          <Featured />
        </Element>
        
        <Element name="venueinfo">
          <VenueInfo />
        </Element>
        
        <Element name="highlights">
           <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
