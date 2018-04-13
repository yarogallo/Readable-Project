import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './HomePage';
import CategoryView from './CategoryView';
import PostDetailView from './PostDetailView';
import AddPostView from './AddPostView';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="app">
      
        <Route exact path="/" render={() => (
          <HomePage/>
        )}/>
        
        <Route path="/categories"render={() => (
          <CategoryView/>
        )}/>
    
        <Route exact path="/post-details" render={() => (
          <PostDetailView/>
        )}/>
          
        <Route exact path="/add-post" render={() => (
          <AddPostView/>
        )}/>

      </section>
    );
  }
}

export default App;
