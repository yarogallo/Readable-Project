import React, {Component} from 'react';
import AddPostView from '../../presentational/AddPostView';
import {connect} from 'react-redux';

import { 
	fetchAllCategories,
	addThisNewPost,
	savePost
 } from '../../../actions';

class AddPostViewContainer extends Component {
	componentDidMount() {
		if (!this.props.categories.length) {
			this.props.getCategories();
		}
	}
	
	render() {
		const {
			categories,
			onAddPost,
			onEditPost,
			postToEdit,
		} = this.props;
		return (
			postToEdit
				? <AddPostView categories={categories} postToEdit={postToEdit} onSubmit={onEditPost}/> 
				: <AddPostView categories={categories} onSubmit={onAddPost}/> 
		);			
	}

}

function mapStateToProps(state, {match}) {
	const postId = match.params.id;
	const postToEdit = !postId 
		? null 
		: {...state.posts.byId[postId]};
	return {
		postToEdit,
		categories: state.categories.map( category => category.name)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getCategories: () => dispatch(fetchAllCategories()),
		onAddPost: (title, body, author, category) => dispatch(addThisNewPost(title, body, author, category)),
		onEditPost: (id, title, body) => dispatch(savePost(id, title, body))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostViewContainer);
