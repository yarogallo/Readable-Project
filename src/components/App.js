import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route exact path="/" component={HomePageContainer}/>
            <Route exact path="/sort-by/:sort"  component={HomePageContainer}/>
              
            <Route exact path="/category/:category" component={CategoryViewContainer}/>
            <Route exact path="/category/:category/sort-by/:sort" component={CategoryViewContainer}/>
          
            <Route exact path="/category/:category/post/:id" component={PostDetailViewContainer}/>
          
            <Route exact path="/add-post" component={AddPostViewContainer}/>
            <Route exact path="/edit-post/:id" component={AddPostViewContainer}/>
          </Switch>
        </section>
      </BrowserRouter>
    );
  };
}

export default App;
