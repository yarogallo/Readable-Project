import React, { Component } from 'react';

import ReadableHeader from './ReadableHeader';
import ReadableControls from './ReadableControls';
import ReadablePosts from './ReadablePosts';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReadableHeader title="readable"/>
        <ReadableControls/>
        <ReadablePosts/>
      </section>
    );
  }
}

export default App;
