import React, { Component } from 'react';

import HomePage from './HomePage';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="app">
        <HomePage/>
      </section>
    );
  }
}

export default App;
