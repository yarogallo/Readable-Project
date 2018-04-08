import React, { Component } from 'react';

import ReadableHeader from './ReadableHeader';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReadableHeader title="readable"/>
      </section>
    );
  }
}

export default App;
