import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchAllPosts } from '../actions';

import HomePage from './HomePage';
import CategoryView from './CategoryView';
import PostDetailView from './PostDetailView';
import AddPostView from './AddPostView';
import '../style/App.css';

class App extends Component {
  constructor() {
		super();
	}
	componentDidMount() {
		this.props.fetchPosts();
	}
  render() {
    return (
      <BrowserRouter>
        <section className="app">
        
          <Route exact path="/" render={() => (
            <HomePage/>
          )}/>
          
          <Route path="/categories"render={() => (
            <CategoryView/>
          )}/>
      
          <Route path="/post-details/:id" component={PostDetailView}/>
      
          <Route exact path="/add-post" render={() => (
            <AddPostView/>
          )}/>

        </section>
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(fetchAllPosts())
	};
}


export default connect(null, mapDispatchToProps)(App);
