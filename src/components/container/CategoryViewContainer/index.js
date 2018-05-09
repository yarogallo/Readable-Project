import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
	postActions,
	categoryActions,
	constants,
} from '../../../actions';

import CategoryView from '../../presentational/CategoryView';
import PageNotFound from '../../presentational/PageNotFound';
import applySort from '../../../helper/applySort.js';

class CategoryViewContainer extends Component {
	componentDidMount() {
		this.props.fetchPostCategory(
				this.props.category
			);
		if (!this.props.categories.length) {
			this.props.fetchCategories();
		}
	}
	componentDidUpdate(prevProps){
		if (prevProps.category !== this.props.category) {
			this.props.fetchPostCategory(this.props.category);
		}
	}
	
	render() {
		const {
			category,
			posts,
			categories,
			sorts,
			sort,
			onVotePost,
			onDeletePost
		} = this.props;
		
		return (
			categories.indexOf(category) === -1  
				? <PageNotFound body={`${category} category does not exist`}/>
				: <CategoryView 
					posts={posts} 
					category={category} 
					categories={categories}
					sorts={sorts}
					sort={sort}
					onVotePost={onVotePost}
					onDeletePost={onDeletePost}/>
		);
	}
}

function mapStateToProps({posts, categories}, {match}) {
	const arrPost = posts.idsArr.reduce((acc, id) => {
		if(posts.byId[id].category === match.params.category && !posts.byId[id].deleted) {
			acc.push(posts.byId[id]);
		}
		return acc;
	}, [])
	
	return {
		category: match.params.category,
		sort: match.params.sort,
		categories: [...categories.categoriesNames],
		posts: applySort(arrPost, match.params.sort), 
		sorts: Object.keys(constants.sortList).map(sort => constants.sortList[sort]),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPostCategory: (category) => {dispatch(postActions.fetchAllPostCategory(category))},
		fetchCategories: () => dispatch(categoryActions.fetchAllCategories()),
		onVotePost: (id, voteText) => dispatch(postActions.votePostScore(id, voteText)),
		onDeletePost: id => dispatch(postActions.deleteThisPost(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewContainer);
