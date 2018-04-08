import React, { Component } from 'react';

import ReadableHeader from './ReadableHeader';
import ReadableControls from './ReadableControls'; 
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReadableHeader title="readable"/>
        <ReadableControls/>
      </section>
    );
  }
}

export default App;
