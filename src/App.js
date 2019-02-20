import React, { Component } from 'react';
import './App.css';
import About from './About';
import Attendants from './Attendants';
import Event from './Event';
import OurStory from './OurStory';
import Details from './Details';
import Registry from './Registry';
import Pics from './Pics';
import Title from './Title';
import Header from './Header';
import WeddingDate from './WeddingDate';
import Accommodations from './Accommodations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <WeddingDate />
        <About title="About The Couple" />
        <OurStory title="Our Story" />
        <Attendants title="Bridesmaid & Groomsmen" />
        <Event title="Event" />
        <Accommodations title="Guest Accommodations" />
        <Details title="More Information" />
        <Registry title="Registry" />
        <Pics title="Gallery" />
      </div>
    );
  }
}

export default App;
