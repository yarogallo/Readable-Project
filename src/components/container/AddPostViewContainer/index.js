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
		this.props.getPostToEdit(this.props.match.params.id);
	}
	
	handlerEditPost(title, body) {
		this.props.onEditPost(this.props.postToEdit.id, title, body);
		this.setState({
			fireRedirect: true
		});
	}
	
	handlerNewPost(title, body, author, category) {
		this.props.onAddPost(title, body, author, category);
		this.setState({
			fireRedirect: true
		});
	}
	
	renderEditView() {
		const {
			categories,
			postToEdit,
		} = this.props;
		return (
			this.state.fireRedirect
				? <Redirect to={`/category/${postToEdit.category}/post/${postToEdit.id}`}/>
				: <AddPostView categories={categories} postToEdit={postToEdit} onSubmit={this.handlerEditPost}/>
		);
	}
	
	renderAddView() {
		const {
			categories,
		} = this.props;
		
		return (
			this.state.fireRedirect 
				? <Redirect to="/"/>
				: <AddPostView categories={categories} onSubmit={this.handlerNewPost}/>
		);
	}
	
	render() {
		const {
			postToEdit,
		} = this.props;
		return postToEdit ?  this.renderEditView() : this.renderAddView();			
	}

}

function mapStateToProps(state, {match}) {
	const postId = match.params.id;
	const allPosts = state.posts.byId;
	
	const postToEdit = !postId 
		? null 
		: {...allPosts[postId]};
	return {
		postToEdit,
		categories: [...state.categories.categoriesNames]
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
