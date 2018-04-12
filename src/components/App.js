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
        
        <Route path="/CategoryView/"render={() => (
          <CategoryView/>
        )}/>
    
        <Route exact path="/PostDetailView/" render={() => (
          <PostDetailView/>
        )}/>
          
        <Route exact path="/AddPostView/" render={() => (
          <AddPostView/>
        )}/>

      </section>
    );
  }
}

export default App;
