import React, {Component} from 'react';
import AddPostView from '../../presentational/AddPostView';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {postActions, categoryActions} from '../../../actions';

class AddPostViewContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fireRedirect: false
		};
		this.handlerEditPost = this.handlerEditPost.bind(this);
		this.handlerNewPost = this.handlerNewPost.bind(this);
	}
	
	componentDidMount() {
		if (!this.props.categories.length) {
			this.props.getCategories();
		}
		if(this.props.match.params.id){
			this.props.getPostToEdit(this.props.match.params.id);
		}
	}
	
	handlerEditPost(title, body) {
		this.props.onEditPost(this.props.postToEdit.id, title, body)
			.then(data => data && this.setState({ fireRedirect: true}));	
	}
	
	handlerNewPost(title, body, author, category) {
		this.props.onAddPost(title, body, author, category)
			.then(result => result && this.setState({fireRedirect: true}));
	}
	
	render() {
		const {postToEdit, categories} = this.props;
		const path = postToEdit ? `/category/${postToEdit.category}/${postToEdit.id}` : "/";
		return (
			this.state.fireRedirect 
				? <Redirect to={path}/>
				: <AddPostView 
					postToEdit={postToEdit} 
					categories={categories} 
					onEditPost={this.handlerEditPost}
					onAddNewPost={this.handlerNewPost}/>
		);			
	}

}

function mapStateToProps({categories, posts}, {match}) {
	return {
		postToEdit: !match.params.id ? null : {...posts.byId[match.params.id]},
		categories: [...categories.categoriesNames]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPostToEdit: id => dispatch(postActions.fetchActivePost(id)),
		getCategories: () => dispatch(categoryActions.fetchAllCategories()),
		onAddPost: (title, body, author, category) => dispatch(postActions.addThisNewPost(title, body, author, category)),
		onEditPost: (id, title, body) => dispatch(postActions.savePost(id, title, body))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostViewContainer);
