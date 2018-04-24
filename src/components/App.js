import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePageContainer from './container/HomePageContainer';
import CategoryViewContainer from './container/CategoryViewContainer';
import PostDetailViewContainer from './container/PostDetailViewContainer';
import AddPostViewContainer from './container/AddPostViewContainer';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="app">
          
          <Route exact path="/"  component={HomePageContainer}/>
            
          <Route path="/categories/:category" component={CategoryViewContainer}/>
        
          <Route path="/post-details/:id" component={PostDetailViewContainer}/>
        
          <Route exact path="/add-post" component={AddPostViewContainer}/>
          <Route exact path="/add-post/:id" component={AddPostViewContainer}/>
      
        </section>
      </BrowserRouter>
    );
  };
}

export default App;
