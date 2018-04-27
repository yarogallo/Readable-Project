import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
	sortList,
	fetchAllCategories,
	fetchAllPostCategory,
	votePostScore
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
			onVotePost,
		} = this.props;
		return (
			<CategoryView 
				posts={posts} 
				category={category} 
				categories={categories}
				sorts={sorts}
				onVotePost={onVotePost}/>
		);
	}
}

function mapStateToProps(state, {match}) {
	const currentCategory = match.params.category;
	const { posts, categories } = state;
	return {
		category: currentCategory,
		categories: [...categories.categoriesNames],
		posts: posts.idsArr.reduce((acc, id) => {
			if(posts.byId[id].category === currentCategory) {
				acc.push(posts.byId[id]);
			}
			return acc;
		}, []),
		sorts: Object.keys(sortList)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPostCategory: (category) => {dispatch(fetchAllPostCategory(category))},
		fetchCategories: () => dispatch(fetchAllCategories()),
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewContainer);
