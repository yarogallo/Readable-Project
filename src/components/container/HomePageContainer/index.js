import React, {Component} from 'react';
import HomePage from '../../presentational/HomePage';
import {
	sortList, 
	fetchAllCategories,
	fetchAllPosts,
	votePostScore,
	deleteThisPost
} from '../../../actions';
import {connect} from 'react-redux';

class HomePageContainer extends Component {
	componentDidMount() {
		if(!this.props.categories.length) {
			this.props.fetchCategories();
		}
		this.props.fetchPosts();
	}
	
	render() {
		const {
			categories,
			posts,
			sorts,
			onVotePost,
			onDeletePost
		} = this.props;
		return(
			<HomePage 
				posts={posts} 
				categories={categories}
				sorts={sorts} 
				onVotePost={onVotePost}
				onDeletePost={onDeletePost}/>
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
			return arr.sort((a, b) => a.voteScore - b.voteScore).reverse();
		case sortList.min_score:
			return arr.sort((a, b) => a.voteScore - b.voteScore);		
		default:
			return arr;
	}
}

function mapStateToProps(state, {match}) {
	const currentSort = match.params.sort || 'none';
	const currentPosts = state.posts.idsArr.reduce( (acc, id) =>	 {
		!state.posts.byId[id].deleted && acc.push(state.posts.byId[id]);
		return acc;	
	}, []);
	return {
		categories: [...state.categories.categoriesNames],
		posts: applySort(currentPosts, currentSort),
		sorts: Object.keys(sortList),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories: () => dispatch(fetchAllCategories()),
		fetchPosts: () => dispatch(fetchAllPosts()),
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText)),
		onDeletePost: id => dispatch(deleteThisPost(id)),
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
