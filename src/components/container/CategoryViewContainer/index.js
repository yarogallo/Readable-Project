import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
	sortList,
	fetchAllCategories,
	fetchAllPostCategory,
	votePostScore,
	deleteThisPost
} from '../../../actions';

import CategoryView from '../../presentational/CategoryView';

class CategoryViewContainer extends Component {
	componentDidMount() {
		this.props.fetchPostCategory(
				this.props.category
			);
		if (!this.props.categories.length) {
			this.props.fetchCategories();
		}
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.category !== nextProps.category) {
			this.props.fetchPostCategory(
				nextProps.category
			);
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
			onDeletePost,
		} = this.props;
		return (
			<CategoryView 
				posts={posts} 
				category={category} 
				categories={categories}
				sorts={sorts}
				sort={sort}
				onVotePost={onVotePost}
				onDeletePost={onDeletePost}
				path={`/categories/${category}`}/>
		);
	}
}

function applySort(arr, sort) {
	switch (sort) {
		case sortList.newest:
			return arr.sort((a, b) => a.timestamp - b.timestamp).reverse();
		case sortList.oldest:
			return arr.sort((a, b) => a.timestamp - b.timestamp);
		case sortList.max_score:
			return arr.sort((a, b) => a.voteScore - b.votePostScore);
		case sortList.min_score:
			return arr.sort((a, b) => a.voteScore - b.votePostScore).reverse();		
		default:
			return arr;
	}
}

function mapStateToProps(state, {match,location}) {
	const currentCategory = match.params.category;
	const currentSort = match.params.sort;
	const { posts, categories } = state;
	const arrPost = posts.idsArr.reduce((acc, id) => {
		if(posts.byId[id].category === currentCategory && !posts.byId[id].deleted) {
			acc.push(posts.byId[id]);
		}
		return acc;
	}, [])
	
	return {
		category: currentCategory,
		sort: currentSort,
		categories: [...categories.categoriesNames],
		posts: applySort(arrPost, currentSort), 
		sorts: Object.keys(sortList).map(sort => sortList[sort]),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPostCategory: (category) => {dispatch(fetchAllPostCategory(category))},
		fetchCategories: () => dispatch(fetchAllCategories()),
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText)),
		onDeletePost: id => dispatch(deleteThisPost(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewContainer);
