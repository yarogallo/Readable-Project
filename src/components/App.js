import React, { Component } from 'react';

import HomePage from './HomePage';
import CategoryView from './CategoryView';
import PostDetailView from './PostDetailView';
import AddPostView from './AddPostView';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="app">
        <HomePage/>
        <CategoryView/>
        <PostDetailView/>
        <AddPostView/>
      </section>
    );
  }
}

export default App;
